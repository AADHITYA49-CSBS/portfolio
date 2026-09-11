# Aadhitya - Developer Portfolio

A sleek, responsive, developer-centric static portfolio website built using **HTML5, CSS3, modern JavaScript (ES6+), and Bootstrap 5.3**, crafted specifically for deployment on **GitHub Pages**.

![Aadhitya Portfolio Preview](./assets/images/avatar.png)

---

## 🌟 Key Features

- **Modern Hero Section**: Features custom developer typography, animated typewriter effects, status pill, quick call-to-action buttons, and an interactive cartoon avatar with floating tech badges (Java, Spring Boot, UiPath, MySQL).
- **About Me & Education**:
  - Highlights strong foundational mindset in enterprise backend development, RPA, and systems.
  - Education cards for **Chennai Institute of Technology (CIT)** (B.Tech CSBS) and **Chinmaya Vidyalaya**.
- **Professional Internships**:
  - **Accenture**: Data Analytics and Visualization Intern (EDA, Analytical workflows, Stakeholder presentations).
  - **NSIC Technical Services Centre**: Mobile Application Developer Intern (Java, Kotlin, XML, Android Studio).
- **Featured Projects**:
  - **Librarian System** (Spring Boot / MySQL / Web / Render deployment)
  - **E-machines QA** (React.js / QA Workflow / Vercel deployment)
  - **Product LookUp Automation** (UiPath Studio / VB.NET / Automation)
- **Technical Skills**:
  - Clean categorized grids for *Development*, *Automation & RPA*, and *Networking & Infrastructure*.
- **Volunteering & Open Source / Leadership**:
  - Team ZORPHIX National Symposium banner integration.
  - Sponsorship Lead, Media Team Lead, and CIT Green Campus initiative.
- **Terminal-Style Contact & Opportunities Section (Exact Specification)**:
  - 2-column responsive layout (stacks cleanly on mobile devices).
  - Monospace typography accents, macOS-style window controls (`~/contact-form`).
  - Formspree AJAX integration with real-time interactive terminal feedback logs.

---

## 🚀 How to Run Locally

Because this is a pure static frontend site, you can run it immediately without any build tools or dependencies:

1. Double-click `index.html` to open it in any modern web browser (Chrome, Edge, Firefox, Safari).
2. Or use Python's built-in server:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.
3. Or use VS Code's **Live Server** extension by right-clicking `index.html` -> **Open with Live Server**.

---

## 🌐 Deploy to GitHub Pages (Step-by-Step)

1. **Initialize Git repository in this folder**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Aadhitya developer portfolio"
   ```

2. **Create a new repository on GitHub**:
   - Go to [GitHub New Repository](https://github.com/new).
   - Name your repo (e.g., `portfolio` or `AADHITYA49-CSBS.github.io`).
   - Leave it public.

3. **Link and push**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/AADHITYA49-CSBS/portfolio.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub: **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select **Branch**: `main`, Folder: `/ (root)`, and click **Save**.
   - Within 1–2 minutes, your portfolio will be live at:
     `https://AADHITYA49-CSBS.github.io/portfolio/`

---

## 📬 Setting Up Formspree for the Contact Form

The contact form is already integrated with Formspree AJAX submission:

1. Sign up for free at [Formspree.io](https://formspree.io).
2. Create a new form and copy your Form ID (e.g., `xbjnvwzy`).
3. In `index.html`, locate line ~380:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
   ```
4. Replace `YOUR_FORMSPREE_ID` with your actual Formspree ID:
   ```html
   <form id="contactForm" action="https://formspree.io/f/xbjnvwzy" method="POST">
   ```
5. Commit and push your changes!

*(Note: If left as `YOUR_FORMSPREE_ID`, the form runs in interactive simulation mode so you can test the terminal feedback right away without errors).*

---

## 📄 Adding Your Resume PDF

1. Name your resume file `resume.pdf`.
2. Place it in `assets/docs/resume.pdf`.
3. The "Resume" buttons in the navigation bar and hero section are already linked to `./assets/docs/resume.pdf`.

---

## 📁 Project Structure

```
AADHITYA PORTFOLIO/
├── index.html              # Main HTML document
├── css/
│   └── style.css           # Modern dark-tech theme, glassmorphism, responsive styling
├── js/
│   └── main.js             # Terminal contact form, typing animation, scroll spy
├── assets/
│   ├── images/
│   │   ├── avatar.png          # Cartoon avatar with 'BELIEVE' t-shirt at computer
│   │   ├── zorphix-banner.png  # ZORPHIX Symposium official banner
│   │   └── favicon.svg         # Developer terminal icon
│   └── docs/
│       └── resume-info.txt     # Resume drop instructions
└── README.md               # Documentation and GitHub Pages deployment guide
```
