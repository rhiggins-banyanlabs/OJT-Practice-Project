# ShoeStore UI

A modern, responsive React application for showcasing shoes using a clean UI built with Tailwind CSS and Vite.

---

## 📖 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Development Workflow](#development-workflow)
- [Tickets Overview](#tickets-overview)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [Design & Resources](#design--resources)
- [Maintainers / Contact](#maintainers--contact)

---

## ✅ Features

- ⚡ Fast performance powered by Vite
- 🎨 Styled with Tailwind CSS
- 🧭 Routing with React Router
- 🔒 Clean and reusable UI components (`Card`, `Button`, etc.)
- 📦 Organized folder structure
- 📱 Mobile responsive layout

---

## 📂 Project Structure

```
client/
├── src/
│   ├── assets/Images/       # Local images for shoes
│   ├── components/ui/       # Reusable UI elements (Button, Card, Heading, Paragraph)
│   ├── pages/               # Page-level components (future use)
│   ├── sections/            # Page sections (Hero, Header, Footer, Features)
│   ├── App.tsx              # Main app structure
│   ├── main.tsx             # Vite entry point
│   └── index.css            # Tailwind and base styles
├── index.html               # Entry HTML
├── vite.config.ts           # Vite config
└── tsconfig*.json           # TypeScript configuration
```

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/project-name.git
cd client
npm install
```

---

## 🚀 Usage

To run the development server:

```bash
npm run dev
```

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 🔁 Development Workflow

- **Branching Strategy:** Use `main` for production, feature branches for development
- **Ticket Naming:** `feature/<feature-name>` or `fix/<bug-name>`
- **Pull Requests:** Small, atomic PRs with meaningful titles and descriptions. Use PR templates if available.

---

## 🗂 Tickets Overview

- Build Hero and Header sections ✅
- Create reusable Card and Button components ✅
- Integrate local assets/images ✅
- Add routing support 🚧
- Add footer with contact/info links ✅

---

## 🧰 Tech Stack

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Routing:** React Router v7
- **Linting:** ESLint with React plugin

---

## 🤝 Contributing

Pull requests are welcome! Please:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/myFeature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/myFeature`)
5. Open a pull request

---

## 🎨 Design & Resources

- UI assets located in `src/assets/Images/`
- Figma or design references: _[Insert Figma Link Here]_

---

## 👩‍💻 Maintainers / Contact

Created and maintained by **Jessica Sharp**  
📧 [jessicasharp2012@gmail.com](mailto:jessicasharp2012@gmail.com)

---

> _This project is part of my front-end portfolio using modern tooling to demonstrate reusable component design and scalable UI structure._
