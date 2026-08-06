# 🏫 Ever Green Model School (E.G.M.S)

Welcome to the official web application for **Ever Green Model School (E.G.M.S)**, Narayanpur, South 24 Parganas.

> **"Where Little Minds Grow Into Bright Futures"**

---

## 🎨 Features & Design Highlights

- **Modern & Responsive UI**: Clean, engaging layout tailored for students, parents, and visitors.
- **Custom Color Palette**: Integrated design system (`#ECF39E` Primary Lime, `#344E41` Forest Secondary, `#F6FAEF` Light Cream, `#1E3F20` Deep Forest).
- **Typography**: Custom `@fontsource` typography featuring **Fredoka** for headings and **Poppins** for body content.
- **Sticky Dynamic Navigation**: Transparent header that transitions into a clean white sticky navbar on scroll.
- **Tailwind CSS v4 & shadcn/ui**: Built with the latest CSS-first configuration and reusable UI components.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager & Runtime**: [Bun](https://bun.sh/)

---

## 📂 Project Structure

```text
frontend/
├── public/                # Static assets (favicons, icons)
├── src/
│   ├── assets/            # Brand crests, images, illustrations
│   ├── components/ui/     # Reusable shadcn UI components
│   ├── landing_page/      # Page views & sections
│   │   ├── home/          # Hero, Programs, About, Facilities, FAQs, Contact
│   │   ├── Navbar.jsx     # Header navigation bar
│   │   └── Footer.jsx     # Footer component
│   ├── index.css          # Tailwind CSS v4 setup & theme design tokens
│   ├── main.jsx           # React app entry point & routes
│   └── App.jsx
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/EGMS-Website.git
   cd EGMS/Website/frontend
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Start the development server**:
   ```bash
   bun dev
   ```

4. **Build for production**:
   ```bash
   bun run build
   ```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
