function uploadImage() {
  const input = document.getElementById("fileInput");
  const file = input.files[0];
  const output = document.getElementById("output");
  const loader = document.getElementById("loading");

  if (!file) {
    alert("📷 Please upload a prescription image.");
    return;
  }

  // Clear previous result
  output.innerHTML = "";
  output.classList.remove("visible");
  loader.style.display = "block";

  const formData = new FormData();
  formData.append("file", file); // This must match the backend route

  fetch("https://mediguide-backend-1.onrender.com/process", {
    method: "POST",
    body: formData
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Server error or unsupported image.");
      }
      return res.json();
    })
    .then(data => {
      loader.style.display = "none";

      if (data.error) {
        output.innerHTML = `<p style="color:red;">❌ ${data.error}</p>`;
        return;
      }

      if (!data.length) {
        output.innerHTML = `<p>No valid prescription details found.</p>`;
        return;
      }

      // Render result
      data.forEach(entry => {
        output.innerHTML += `
          <div class="drug-block">
            <h3>${entry.drug}</h3>
            <p><strong>Strength:</strong> ${entry.strength}</p>
            <p><strong>Frequency:</strong> ${entry.frequency}</p>
            <p><strong>Duration:</strong> ${entry.duration}</p>
            <p><strong>Instructions:</strong> ${entry.instructions}</p>
          </div>
        `;
      });

      output.classList.add("visible");
      output.scrollIntoView({ behavior: "smooth" });
    })
    .catch(err => {
      loader.style.display = "none";
      alert("⚠️ Could not connect to the backend. It may be waking up. Please wait a few seconds and try again.");
    });
}
