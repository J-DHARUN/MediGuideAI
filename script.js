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
  formData.append("image", file);

  fetch("http://localhost:5000/parse", {
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
              <p><strong>Strength:</strong> ${entry.strength}</p>
              <p><strong>Frequency:</strong> ${entry.frequency}</p>
              <p><strong>Duration:</strong> ${entry.duration}</p>
              <p><strong>Instructions:</strong> ${entry.instructions}</p>
            </div>
          `;
        });

        // ✅ Make output visible
        output.classList.add("visible");

        // ✅ Scroll to results smoothly
        output.scrollIntoView({
          behavior: "smooth"
        });
      }
    })
    .catch(err => {
      loader.style.display = "none";
      alert("❌ Could not connect to the server.");
    });
}
