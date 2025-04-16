# Let's Study Together – Phase 2

## Overview
"Let's Study Together" is a collaborative student-focused web application designed to enhance productivity through messaging, progress tracking, and study group formation.

This submission covers **Phase 2**, focusing on intermediate development including routing, component structure, styling, and dynamic state management.

---

## Project Structure
let-s-study-together/
├── components/
    │ ├── Navbar.js
    │ └── Footer.js 
├── context/
    │ └── ThemeContext.js 
├── pages/ 
    ├── index.js
    ├── messages.js 
    ├── progress.js 
    ├── study-groups.js 
    ├── _app.js 
    ├── _document.js
    │ └── api/ 
        └── hello.js 
├── styles/
    ├── global.css
    ├── globals.css
    ├── themes.js
    └── Home.module.css 
├── public/ 
    │ └── (static assets/images if any) 
├── README.md 
└── package.json

---

## Routes & Navigation

| Path              | Page Description                   |
|-------------------|------------------------------------|
| `/`               | Home page with app overview        |
| `/messages`       | Messaging interface                |
| `/progress`       | User progress tracking             |
| `/study-groups`   | Study group discovery/joining      |

Navigation is handled via `next/link` for smooth transitions between pages.

---

## Components

### `Navbar.js`
- Top-level navigation across all pages
- Contains links to home, messages, progress, and study groups

### `Footer.js`
- Simple footer shown on all pages
- Helps with consistent layout and branding

---

## Styling & Theming

- **styled-components** used for consistent and dynamic component styling
- CSS Modules (e.g., `Home.module.css`) for scoped styles
- Responsive layout with flexbox
- Light theming and hover effects for interactivity

---

## State Management

### Messages Page (`messages.js`)
- Uses React’s `useState` for:
  - Managing input
  - Dynamically displaying a list of messages
- Form handling and scrollable message area included

---

## Placeholder API (Preparation for Phase 3)

A basic placeholder exists in:
- `pages/api/hello.js` — simulates a backend API response

Additional API helpers can be added later in `utils/` or within components.