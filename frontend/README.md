# 📱 EGMS Frontend Web Application

The frontend client for **Ever Green Model School (E.G.M.S)** built with **React 19**, **Vite**, **Tailwind CSS v4**, and **React Router v7**.

---

## 🎨 Design System & Theme Tokens

The application features a custom, modern color palette and typography tailored for an engaging user experience:

### Color Palette
- 🟢 **Primary Accent**: `#B9FF66` (Vibrant Lime) / `#ECF39E` (Soft Lime)
- 🌲 **Secondary Forest**: `#344E41` (Deep Sage) / `#1E3F20` (Dark Forest Green)
- 🍦 **Light Background**: `#F6FAEF` (Cream / Soft Off-White)
- ⬛ **Contrast Surface**: `#282933` (Charcoal Black)

### Typography
- **Headings**: `Fredoka Variable` (Playful, bold, highly legible)
- **Body & Controls**: `Poppins` (Clean modern sans-serif)

---

## 🛠️ Architecture & Modules

```text
frontend/src/
├── assets/                  # Brand crests, images, illustrations
├── components/
│   ├── ui/                  # Reusable accessible UI components (Modal, Button, Dialog)
│   └── custom/              # Custom application forms (ContactForm, EnrollmentForm)
├── context/
│   └── LanguageContext.jsx  # Global language provider (English / Bengali switcher)
├── landing_page/
│   ├── home/                # Hero, Programs Overview, About, Facilities, FAQs, Contact
│   ├── enroll/              # Full Admission Application Portal
│   ├── facilities/          # School Van, Smart Classroom & Drawing School details
│   ├── gallery/             # Photo & event gallery grid
│   ├── privacy/             # Privacy policy & data protection terms
│   ├── Navbar.jsx           # Sticky glassmorphism header navigation
│   └── Footer.jsx           # Comprehensive footer with quick links & contact info
├── locales/
│   └── translations.js      # English to Bengali translation dictionary
├── index.css                # Tailwind CSS v4 directives & custom utilities
├── main.jsx                 # Application entry point & router definitions
└── App.jsx
```

---

## 🌐 Internationalization (i18n)

The web app features seamless internationalization powered by React Context:
- Switch language on demand between **English** and **Bengali (বাংলা)**.
- Localized form labels, error messages, navigation links, and educational program details.
- Persisted language preference stored in `localStorage`.

---

## 🚀 Setup & Execution

### Prerequisites
- Node.js (v18+) or [Bun](https://bun.sh/)

### 1. Install Dependencies
```bash
bun install
# or: npm install
```

### 2. Start Development Server
```bash
bun dev
# or: npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build & Preview
```bash
bun run build
bun run preview
```

The compiled output will be generated in the `/dist` directory, ready for deployment on Vercel, Netlify, or any static host.
