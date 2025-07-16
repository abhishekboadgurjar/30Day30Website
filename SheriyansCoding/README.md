# Sheriyans Coding School

Empowering the next generation of developers with hands-on coding education.

---

## Table of Contents
- [About](#about)
- [Features](#features)
- [Courses](#courses)
- [Gallery](#gallery)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)
- [For Developers](#for-developers)
- [Contact](#contact)
- [License](#license)

---

## About

Sheriyans Coding School is dedicated to providing practical, industry-relevant coding education. Founded in 2015, we focus on hands-on learning, a supportive community, and a curriculum that evolves with the tech industry. Our mission is to empower individuals with the skills and confidence needed to thrive in the digital economy.

## Features

- **Industry-Relevant Curriculum:** Courses designed with input from industry experts.
- **Hands-on Coding Experience:** Build real projects from day one.
- **Supportive Community:** Join a network of learners and mentors.
- **Job Placement Assistance:** Career guidance, interview prep, and hiring partner connections.
- **Modern, Responsive UI:** Built with React, Tailwind CSS, and Framer Motion.
- **Gallery:** Visual highlights of classrooms, events, and student projects.

## Courses

We offer a wide range of courses, including:

- **Full-Stack Web Development:** Master front-end and back-end technologies.
- **Mobile App Development:** Build native apps for iOS and Android.
- **Data Structures & Algorithms:** Strengthen problem-solving and interview skills.
- **UI/UX Design Fundamentals:** Learn design principles and tools.
- **JavaScript Mastery:** Advanced JavaScript concepts and ES6+ features.
- **Machine Learning Fundamentals:** Intro to ML algorithms and Python.
- **Game Development with Unity:** Create 2D/3D games.
- **Python for Data Science:** Data analysis, visualization, and ML basics.

Explore all courses on the Courses page.

## Gallery

Visit the Gallery to see photos from our classrooms, events, workshops, and student projects.

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd sheriyans-coding-school
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
├── public/                 # Static assets (images, favicon, etc.)
├── src/                    # Main source code
│   ├── components/         # Reusable UI components and layout
│   ├── pages/              # Page components for routing
│   ├── App.tsx             # Main app component with routes
│   ├── main.tsx            # React entry point
│   └── index.css           # Global styles (Tailwind)
├── index.html              # Main HTML entry point
├── package.json            # Project metadata, scripts, and dependencies
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite build configuration
└── ...
```

## Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build
- `npm run lint` — Lint the codebase

## Tech Stack

- **Frontend:** React, TypeScript, React Router, Framer Motion, Tailwind CSS
- **Build Tool:** Vite
- **Linting:** ESLint
- **Icons:** Lucide React

## For Developers

### Coding Standards
- Use **TypeScript** for all React components.
- Follow the existing **ESLint** and **Prettier** rules.
- Use **Tailwind CSS** utility classes for styling.
- Organize new components in the appropriate `components/` or `pages/` subfolders.

### Adding New Pages
- Create a new file in `src/pages/`.
- Add a route in `src/App.tsx` using React Router.

### Making UI Changes
- Reusable UI elements go in `src/components/ui/`.
- Layout or navigation changes go in `src/components/layout/`.

### Submitting Changes
1. Fork the repository and create a new branch for your feature or bugfix.
2. Make your changes and ensure the app runs and lints cleanly.
3. Submit a pull request with a clear description of your changes.

### Issues & Feature Requests
- Use GitHub Issues to report bugs or request features.
- Please provide as much detail as possible for faster resolution.


