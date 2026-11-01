# Salman Rasheed M. — Full Stack & MERN Developer Portfolio

<div align="center">

  [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![WebGL](https://img.shields.io/badge/Graphics-WebGL_Shaders-black?style=for-the-badge&logo=webgl&logoColor=white)](https://github.com/oframe/ogl)
  [![Vercel](https://img.shields.io/badge/Deploy-Vercel_Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
  [![License](https://img.shields.io/badge/License-MIT-000000?style=for-the-badge)](LICENSE)

  <p align="center">
    <strong>A high-performance monochrome editorial developer portfolio showcasing digital craftsmanship, spatial web animations, WebGL liquid shaders, 3D drum reel navigation, and production full-stack systems.</strong>
  </p>

  <p align="center">
    Built &amp; Engineered by <strong><a href="https://github.com/sallu09876">Salman Rasheed M.</a></strong>
    <br>
    Perinthalmanna, Kerala, India • <a href="mailto:sallu2004mkt@gmail.com">sallu2004mkt@gmail.com</a>
  </p>

</div>

---

## ✦ Overview

This portfolio is an editorial developer showcase engineered with a focus on modern typography, fluid physics, and cutting-edge web graphics. Built around a curated Swiss-inspired monochrome aesthetic, it pairs brutalist minimalism with rich micro-interactions, hardware-accelerated scroll animations, and interactive 3D WebGL components.

Designed to demonstrate end-to-end full-stack capabilities, the codebase highlights production applications across logistics, healthcare queue telemetry, multi-vendor e-commerce, and enterprise SaaS platforms.

---

## ✦ Key Architectural Features

### 1. 🪐 Luxury Architectural Preloader & Curtain Reveal
- Obsidian `#0A0A0C` full-screen cover preventing Flash of Unstyled Content (FOUC) while WebGL shaders, fonts, and assets initialize.
- Real-time telemetry status stepper (`00%` → `100%`) synchronized with an animated gradient razor progress track.
- Theatrical curtain reveal sliding upward via a luxury cubic-bezier curve (`cubic-bezier(0.85, 0, 0.15, 1)`) with smooth hero section rise entrance.
- Fast-forward skip support on click or keypress (<kbd>Space</kbd> / <kbd>Enter</kbd> / <kbd>Esc</kbd>).

### 2. 🗞️ Editorial Hero & Metallic Typography Shaders
- Responsive fluid typography powered by dynamic viewport units and CSS grid boundaries.
- Multi-layer metallic header effects and integrated portrait depth masking.
- Floating status pill indicating active availability for full-stack and freelance contracts.

### 3. 🔍 `ScrollExpandMedia` Kinetic Canvas
- Scroll-driven media expansion stage that smoothly interpolates card dimensions, aspect ratio, and blur filters.
- Dual-layer GPU-accelerated unblur rendering running at 60/120 FPS without layout thrashing.
- Unobscured perimeter layout keeping editorial artwork in full view.

### 4. 🧭 Horizontal Spatial Experience Timeline
- Sticky horizontal canvas translating vertical scroll into horizontal spatial progression across three career chapters:
  - **Chapter 1: Techolas Technologies (2025–2026)** — Foundation, MVC REST APIs, MongoDB & PostgreSQL.
  - **Chapter 2: Sinnonteq (2026)** — B2B SaaS platform, JWT authorization, Azure OpenAI chatbot with RAG pipeline.
  - **Chapter 3: Codeedex Technologies (2026–Present)** — Enterprise HRM/PMS/CRM platforms and logistics delivery dispatch.
- Accessible fallback honoring user OS preferences (`prefers-reduced-motion`).

### 5. 🌊 FlexCarousel (OGL WebGL Liquid Shader Project Slider)
- Interactive card slider powered by **OGL** (lightweight WebGL engine) with liquid lens bending and real-time mesh displacement.
- Displays 5 core production systems: **Go Load**, **DrBooking**, **FastBag**, **Codeedex Platform**, and **MedFlow**.
- Dynamic accordion states, focus-on-click navigation, and full keyboard/touch support.

### 6. 🎡 WorksWheel 3D Drum Reel (Landing Pages)
- Mathematical 3D cylindrical drum projection with radial ring transformations (`rotateX`, `rotateZ`, `translateZ`).
- Physics-based smooth drag gestures, momentum inertia, wheel scrolling, and step navigation.
- Showcases 5 curated high-converting landing pages:
  - **Go Load** — *Logistics & Transport*
  - **DrBooking** — *Healthcare Appointment & Queue Telemetry*
  - **FastBag** — *Hyperlocal Multi-Vendor Delivery*
  - **SaaS Agency** — *Enterprise B2B SaaS Platform*
  - **Travel Booking** — *Curated Travel & Adventure Platform*

### 7. ⚡ Skills & Tech Architecture Bento Grid
- Modular bento architecture displaying **34 production technologies** across 4 domains (Frontend, Backend & APIs, Databases, Cloud & DevOps).
- Infinite gliding 60 FPS marquee ticker featuring core technologies.
- Interactive category filter tabs (`All`, `Frontend`, `Backend`, `Database`, `Cloud`).
- **Interactive Tech Inspector HUD Terminal**: Hovering or tapping any tech badge streams its real-world production role into the live terminal HUD.

### 8. 🗂️ Editorial Services Accordion
- Five clear client offerings (*Full Stack Web Dev*, *Frontend Development*, *Backend Development*, *Software Development*, *Custom Web Apps*).
- One-click `"INQUIRE ↗"` action buttons that automatically open and pre-select the service inside the contact modal.

### 9. ✉️ Luxury Contact Modal (Web3Forms & Local Node.js API)
- Two-column card featuring direct email copy button (`sallu2004mkt@gmail.com`), location telemetry, and social pills.
- Dynamic project inquiry form with interactive timeline chips (`< 1 Mo`, `1-3 Mos`, `3+ Mos`, `Flexible`).
- Automated email delivery via **Web3Forms** for static deployments (Vercel / Netlify) + integrated Node.js `/api/contact` endpoint for local development.

---

## ✦ Clean Project Structure

```text
ECHO-WEBSITE-main/
├── index.html                   # Semantic HTML Portfolio Markup (Clean & Modular)
├── styles.css                   # Custom Animations, Hero Masks & Accordions
├── preloader.js                 # Architectural Luxury Preloader Controller
├── main.js                      # Core Application Engine, Modals & Web3Forms
├── server.js                    # Node.js Static & Contact API Server
├── flex-carousel.js             # WebGL Liquid Shader Project Engine
├── FlexCarousel.css             # Liquid Shader Stylesheet
├── works-wheel.js               # 3D Vertical Drum Reel Engine
├── experience-section.js        # Horizontal Spatial Experience Timeline
├── scroll-expand-media.js       # Kinetic Media Unblur & Expansion Stage
├── package.json                 # Scripts & Project Metadata
├── .gitignore                   # Clean Git Exclusion Rules
├── contacts.json                # Local JSON Store for Form Inquiries
└── assets/                      # All Production Web & Project Media Assets
    ├── hero-profile.png         # Main Hero Portrait (Salman Rasheed M.)
    ├── Go-Load.webp             # Featured Project 1
    ├── DR-Booking.webp          # Featured Project 2
    ├── Fast-Bag.webp            # Featured Project 3
    ├── Enterprise-Platform.webp # Featured Project 4
    ├── Med-Flow.webp            # Featured Project 5
    ├── landingpage-goload.webp
    ├── landingpage-drbooking.webp
    ├── landingpage-fastbag.jpeg
    ├── landingpage-saasagency.webp
    ├── landingpage-travelbooking.webp
    ├── about_floating_light_hq.png
    ├── about_starry_castle_hq.jpg
    ├── hero_portrait.png
    └── string-tune.mjs
```

---

## ✦ Getting Started Locally

This portfolio runs natively with zero bundler requirements using ES modules.

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Clone the repository
```bash
git clone https://github.com/sallu09876/salman-rasheed-portfolio.git
cd salman-rasheed-portfolio
```

### 2. Start the local server
```bash
npm start
# or
node server.js
```

Navigate to **`http://localhost:8080`** in your browser.

---

## ✦ Production Deployment (Vercel, Netlify & GitHub Pages)

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Other / Static**.
4. Build Command: *leave empty*. Output Directory: `./`.
5. Click **Deploy**.

### Contact Form Setup with Web3Forms
To receive inquiries directly in your Gmail inbox (`sallu2004mkt@gmail.com`) when hosted on Vercel:
1. Visit [web3forms.com](https://web3forms.com) and enter `sallu2004mkt@gmail.com`.
2. Check your email for your free **Access Key**.
3. In `index.html` (around line 2215), replace `"YOUR_ACCESS_KEY_HERE"` with your key:
   ```javascript
   const WEB3FORMS_ACCESS_KEY = "YOUR-ACCESS-KEY-HERE";
   ```
4. Every submission from your live site will now land straight in your Gmail inbox!

---

## ✦ Connect with Salman Rasheed M.

- **GitHub**: [@sallu09876](https://github.com/sallu09876)
- **LinkedIn**: [salmanrasheedm](https://www.linkedin.com/in/salmanrasheedm/)
- **Instagram**: [@salman_rasheed_m](https://www.instagram.com/salman_rasheed_m/)
- **Email**: [sallu2004mkt@gmail.com](mailto:sallu2004mkt@gmail.com)
- **Resume**: [Google Drive Resume ↗](https://drive.google.com/file/d/1jSwTFry6pTpy56oJhw4K9bhx7q2yhM2r/view?usp=sharing)

---

## ✦ License

This project is licensed under the [MIT License](LICENSE).
Crafted with precision &copy; 2026 Salman Rasheed M.
