# 📄 PDF Generator

A **React.js application** for generating and downloading employee reports in **PDF format**.
Built with **@react-pdf/renderer**, it allows users to fill out a form, preview the data, and either:

* Open the PDF in a **new browser tab**
* Or **download the PDF** directly.

---

## 🚀 Features

* 📋 Employee form with fields:

  * Name
  * Department
  * Role
  * Joining Date
  * Notes
* 🖨 Generate PDF and open in **new browser tab**
* 📥 Download PDF using **PDFDownloadLink**
* 🎨 Modern UI styled with **Tailwind CSS**
* ✅ Form validation before PDF generation

---

## 🛠 Tech Stack

* **React.js**
* **Tailwind CSS**
* **@react-pdf/renderer**
* **Lucide Icons**

---

## 📂 Project Structure

```
PDF-Generator/
│── src/
│   ├── components/
│   │   ├── EmployeeForm.jsx   # Employee input form
│   │   ├── EmployeePDF.jsx    # PDF layout template
│   ├── App.jsx                # Main container with logic
│   ├── main.jsx              # React entry point
│── package.json
│── README.md
```

---

## ⚙️ Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/FarhanHaider999/PDF-Generator.git
cd PDF-Generator
npm install
```

---

## ▶️ Run the Project

Start the development server:

```bash
npm run dev
```

The app will run on:
👉 `http://localhost:5173/` (Vite default)

---

## 📑 Usage

1. Fill out the **employee form**
2. Click **Generate PDF**

   * A new tab will open with the PDF
3. Optionally, click **Download PDF** to save the file locally


