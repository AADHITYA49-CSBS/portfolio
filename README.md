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
  - **Librarian System** (Spring Boot / MySQL / Web / Vercel deployment)
  - **E-machines QA** (React.js / QA Workflow / Render deployment)
  - **Product LookUp Automation** (UiPath Studio / VB.NET / Automation)
- **Technical Skills**:
  - Clean categorized grids for *Development*, *Automation & RPA*, and *Networking & Infrastructure*.
- **Volunteering & Open Source / Leadership**:
  - Team ZORPHIX National Symposium banner integration.
  - Sponsorship Lead, Media Team Lead, and CIT Green Campus initiative.
- **Terminal-Style Contact & Opportunities Section**:
  - 2-column responsive layout (stacks cleanly on mobile devices).
  - Monospace typography accents, macOS-style window controls (`~/contact-form`).
  - Integrated with **Typeform** (`https://form.typeform.com/to/nrIdI6pO`) embedded directly in the terminal interface, with quick fullscreen launch button.

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
   git commit -m "Launch Aadhitya Developer Portfolio"
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

## 📬 Contact Form (Typeform)

The contact form is powered by Typeform:
- **Form URL**: `https://form.typeform.com/to/nrIdI6pO`
- Embedded directly into the terminal window on the site with full interactive question flows.
- Also includes a direct button to launch the form in fullscreen.

---

## 📄 Resume Link

The "Resume" buttons in the navigation bar and hero section are linked to your official Google Drive document:
`https://drive.google.com/file/d/1mDSQnck6JtVSCm6D2V7W67XP1r9oB6Lg/view?usp=sharing`

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


---

# ☁️ AWS Cloud Infrastructure Deployment

## Windows Server + IIS Web Hosting on Amazon EC2

As part of my cloud and infrastructure learning, I provisioned and configured a Windows Server environment on AWS EC2 and deployed this portfolio using Microsoft IIS.

### Infrastructure Stack

- **Cloud:** AWS
- **Compute:** Amazon EC2
- **OS:** Windows Server 2022
- **Instance:** t3.micro
- **Web Server:** IIS
- **Networking:** VPC, Subnet, Security Groups
- **Remote Administration:** RDP
- **Version Control:** Git / GitHub
- **Automation:** PowerShell

### Deployment Architecture

```text
                 Internet
                    |
                    | HTTP : 80
                    v
        +-------------------------+
        |       AWS EC2           |
        |   Windows Server 2022   |
        |                         |
        |    Security Group       |
        |    |              |     |
        |   80             3389   |
        |   HTTP            RDP    |
        |                         |
        |          IIS            |
        |           |             |
        |           v             |
        |     Portfolio Files     |
        +-------------------------+
