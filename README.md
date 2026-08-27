# 🏫 Ever Green Model School (E.G.M.S) - Web Platform

[![React](https://img.shields.io/badge/React-19.2-blue.svg?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.21-000000.svg?logo=express)](https://expressjs.com/)
[![Bun](https://img.shields.io/badge/Bun-1.0+-fbf0df.svg?logo=bun)](https://bun.sh/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

The official web platform and administrative backend for **Ever Green Model School (E.G.M.S)**, located in Narayanpur, Kakdwip, South 24 Parganas, West Bengal.

> *"Where Little Minds Grow Into Bright Futures"*

---

## 🌟 Key Platform Features

- **🌐 Dual Language Support**: Dynamic language switching between **English** and **Bengali (বাংলা)**.
- **📝 Online Admissions & Enrollment**: Streamlined application form with Aadhaar and Birth Certificate document verification.
- **🚌 Transport & Facility Requests**: Interactive portal for school van booking and facility inquiries.
- **📩 Direct Contact & Inquiries**: Automated notification pipeline for parent inquiries powered by Nodemailer.
- **🛡️ Anti-Bot & Rate-Limiting Security**: Protected API endpoints with challenge token verification and strict IP rate limiting.
- **📱 Fully Responsive Design**: Optimized for seamless viewing on mobile phones, tablets, and desktop displays.
- **⚡ SEO & Meta Optimization**: Configured with Open Graph tags, canonical URLs, and Google JSON-LD Knowledge Panel schema.

---

## 🏗️ Architecture & Tech Stack

### **Frontend** (`/frontend`)
- **Core**: React 19, Vite, React Router v7
- **Styling**: Tailwind CSS v4, `@fontsource` (Fredoka & Poppins typography)
- **UI Components**: Lucide React Icons, custom design system tokens
- **Internationalization**: React Context (`LanguageContext`) with dictionary translation state

### **Backend** (`/backend`)
- **Server**: Express.js, Node.js / Bun Runtime
- **Validation**: Zod schema validation for payload security
- **Email Delivery**: Nodemailer with SMTP Integration
- **Security & Tokens**: `express-rate-limit`, JSON Web Tokens (JWT) for challenge verification, Multer file handling

---

## 📂 Repository Structure

```text
EGMS/
├── frontend/               # React + Vite client web application
│   ├── public/             # Static assets, favicons, manifests & SEO assets
│   ├── src/                # React components, pages, contexts & locales
│   └── package.json
├── backend/                # Express REST API & SMTP email handler
│   ├── src/                # Server entry point & validation schemas
│   ├── .env.example        # Environment configuration template
│   └── package.json
├── api/                    # Vercel serverless deployment entry points
├── vercel.json             # Vercel routing configuration
└── README.md               # Root repository documentation
```

---

## 🚀 Quick Start Guide

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/) installed on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/EGMS.git
cd EGMS
```

### 2. Configure Backend Environment
```bash
cd backend
cp .env.example .env
```
Edit `.env` and fill in your SMTP credentials (e.g., Gmail App Password) and notification email.

### 3. Run Development Servers

**Backend API**:
```bash
cd backend
bun dev    # or: npm run dev
```
*API will run on `http://localhost:5000`*

**Frontend Client**:
```bash
cd frontend
bun dev    # or: npm run dev
```
*Web application will open on `http://localhost:5173`*

---

## 📞 School Contact & Information

- **School Name**: Ever Green Model School (E.G.M.S)
- **Address**: NH0117, Narayanpur, Kakdwip, South 24 Parganas, West Bengal - 743357
- **Phone Contacts**: [+91 9732644550](tel:9732644550) | [+91 9932285255](tel:9932285255)
- **Email**: [evergreenmodelschool58@gmail.com](mailto:evergreenmodelschool58@gmail.com)
- **Official Socials**:
  - 📺 **YouTube**: [@evergreenmodelschool6216](https://www.youtube.com/@evergreenmodelschool6216)
  - 📘 **Facebook**: [evergreenmodelschool2006](https://www.facebook.com/evergreenmodelschool2006)

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for full details.
