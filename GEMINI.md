## Project Overview

This is the official company website for LKDV Solutions Oy, a Finnish company specializing in secure AI solutions. The project is a single-page application (SPA) built with **React** and **TypeScript**.

- **Framework:** React 18.3.1
- **Build Tool:** Vite 7.1.3
- **UI Library:** Material-UI (MUI) 5.18.0
- **Routing:** React Router 6.20.0
- **Internationalization (i18n):** i18next for Finnish and English.
- **Styling:** Emotion
- **Linting:** ESLint

The site is designed to be a comprehensive corporate presence, detailing the company's services, its "Isolated AI" platform, and providing industry-specific insights. It includes features like multilingual support and contact forms that submit data to a PHP backend.

## Building and Running

### Prerequisites
- Node.js and npm

### Key Commands

- **Install dependencies:**
  ```bash
  npm install
  ```

- **Run the development server:**
  Starts a local server at `http://localhost:5173`.
  ```bash
  npm run dev
  ```

- **Build for production:**
  Compiles TypeScript and bundles the application into the `dist/` directory.
  ```bash
  npm run build
  ```

- **Run linting checks:**
  Analyzes the code for style and quality issues.
  ```bash
  npm run lint
  ```

- **Preview the production build:**
  Serves the contents of the `dist/` directory locally.
  ```bash
  npm run preview
  ```

## Development Conventions

- **Component-Based Architecture:** The project follows a standard React component structure, with reusable components in `src/components/` and page-level components in `src/pages/`.
- **Styling:** Styling is handled using Emotion, often colocated with components or defined in the central theme.
- **Internationalization:** Text content should be managed through the `i18next` framework. Translation files are located in `public/locales/`. To add or modify text, edit the `translation.json` files for each language.
- **Routing:** Page navigation is managed by `react-router-dom`. New pages should be added to the main router in `App.tsx`.
- **State Management:** Primarily uses React hooks (`useState`, `useEffect`, etc.) for local component state.
- **Code Quality:** All code should pass ESLint checks before being committed. The configuration is in `.eslintrc.cjs`.
- **Security Note:** A hardcoded security token is present in `utils/formService.ts`. This is a known issue and should be addressed, for example by using environment variables or a more robust authentication method.
