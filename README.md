# 🧠 MediGuide AI – Smart Prescription Digitizer

**MediGuide AI** is an AI-powered web tool that helps patients understand handwritten prescriptions. It extracts medicines, dosage, and usage instructions, while also warning users of allergy risks — all through a clean, interactive web interface.

---

## 🌐 Live Demo

- 🖥️ **Frontend** (GitHub Pages):  
  [https://j-dharun.github.io/MediGuideAI/](https://j-dharun.github.io/MediGuideAI/)

- ⚙️ **Backend API** (Flask on Render):  
  [https://mediguide-backend.onrender.com](https://mediguide-backend.onrender.com)

---

## ⚠️ Backend Wake-up Notice

This backend is hosted on **Render’s free tier**, which goes to sleep after **15 minutes of inactivity**.

> 💡 When accessing the site after it's been idle:
>
> - The first upload may take **20–30 seconds**
> - A short delay is normal — please be patient
> - After wake-up, performance will be fast again

You can also wake the backend manually by visiting the URL above before uploading a prescription.

---

## 🚀 Features

- 📤 Upload prescription images (handwritten or typed)
- 🔍 AI extracts:
  - Drug name, strength, frequency, and duration
  - Allergy warnings (based on a simple allergy DB)
  - Age suitability and side effects
- 📄 Auto-generated summary using medical knowledge base
- 📱 Responsive UI built with HTML/CSS/JS

---

## 🛠️ Tech Stack

| Frontend | Backend |
|----------|---------|
| HTML, CSS, JavaScript | Python (Flask) |
| GitHub Pages (static host) | Render (Flask API deployment) |
| — | Doctr (OCR), Regex NLP |
| — | gunicorn, Flask-CORS |

---

## 📦 Project Structure
