function uploadImage() {
  const input = document.getElementById("fileInput");
  const file = input.files[0];
  const output = document.getElementById("output");
  const loader = document.getElementById("loading");

  if (!file) return alert("Please upload a prescription image.");

  output.innerHTML = "";
  output.classList.remove("visible");
  loader.style.display = "block";

  const formData = new FormData();
  formData.append("file", file);  // 🔁 Make sure the Flask backend uses `request.files['file']`

  fetch("https://mediguide-backend.onrender.com/process", {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      loader.style.display = "none";

      if (data.error) {
        output.innerHTML = `<p style="color:red;">${data.error}</p>`;
      } else {
        data.forEach(entry => {
          output.innerHTML += `
            <div class="drug-block">
              <h3>${entry.drug}</h3>
              <p><strong>Strength:</strong> ${entry.strength || "N/A"}</p>
              <p><strong>Frequency:</strong> ${entry.frequency || "N/A"}</p>
              <p><strong>Duration:</strong> ${entry.duration || "N/A"}</p>
              <p><strong>Instructions:</strong> ${entry.instructions}</p>
            </div>
          `;
        });

        output.classList.add("visible");
        output.scrollIntoView({ behavior: "smooth" });
      }
    })
    .catch(err => {
      loader.style.display = "none";
      alert("❌ Could not connect to the backend. It might be waking up. Please try again in a few seconds.");
    });
}
