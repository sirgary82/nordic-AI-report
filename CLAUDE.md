# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LKDV Solutions Oy company website - a React-based single-page application showcasing the company's AI solutions, particularly the "Isolated AI" platform. The site is multilingual (Finnish/English) and hosted on Apache shared hosting.

## Development Commands

### Build and Development
```bash
npm run dev          # Start Vite dev server (default: http://localhost:5173)
npm run build        # TypeScript compilation + Vite build → dist/
npm run preview      # Preview production build locally
npm run lint         # ESLint check (TypeScript/TSX files)
```

### Deployment
```bash
npm run deploy       # Build and deploy to GitHub Pages (runs predeploy + gh-pages)
```

For production deployment to lkdv.fi: manually upload `dist/` contents to web server's `public_html/` directory (see DEPLOYMENT.md).

## Technology Stack

- **Framework**: React 18.3.1 with TypeScript 5.2.2
- **Build Tool**: Vite 7.1.3
- **UI Library**: Material-UI (MUI) 5.18.0 + Emotion for styling
- **Routing**: React Router 6.20.0 (client-side routing)
- **i18n**: i18next 23.7.6 with HTTP backend and language detection
- **Charts**: Chart.js 4.4.0 (used in Nordic AI Report page)
- **Backend**: PHP form handler (`forms/send-form.php`)

## Architecture

### File Structure

```
/
├── App.tsx              # Main app component with Router and route definitions
├── main.tsx             # React entry point
├── i18n.ts              # i18next configuration (FI/EN languages)
├── vite.config.ts       # Vite build configuration
├── components/          # Reusable UI components
│   ├── Navbar.tsx       # Navigation with dropdown menus + mobile support
│   ├── Footer.tsx       # Site footer
│   ├── PageContainer.tsx # Layout wrapper with background image support
│   └── report/          # Nordic AI Report specific components
├── pages/               # Page-level components (one per route)
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── PlatformPage.tsx
│   ├── PilotProgramPage.tsx
│   ├── ContactPage.tsx
│   ├── NordicAIReportPage.tsx
│   └── [Industry]Page.tsx  # Legal, Financial, Government, Healthcare
├── theme/
│   └── theme.ts         # MUI theme with custom palette and component overrides
├── utils/
│   └── formService.ts   # Contact/pilot form submission logic + dev mode
├── public/
│   ├── images/          # Static images
│   ├── locales/         # Translation JSON files (en/fi)
│   ├── .htaccess        # Apache routing + security headers
│   └── CNAME            # GitHub Pages domain config
└── forms/
    └── send-form.php    # PHP email handler for forms
```

### Routing

All routes are defined in `App.tsx`. The app uses client-side routing with React Router. The `.htaccess` file ensures Apache redirects all non-file requests to `index.html` to enable SPA routing.

### Theme System

The design is based on a "glassmorphism" aesthetic defined in `theme/theme.ts`:
- **Primary color**: `#2c3e50` (dark slate blue)
- **Secondary color**: `#00f2ea` (glowing teal)
- **Cards**: Semi-transparent black (`rgba(0,0,0,0.4)`) with backdrop blur and white borders
- **Typography**: Roboto font family, white text for dark backgrounds
- **Buttons**: Rounded corners (8px), secondary variant is teal with white text

All pages should follow the HomePage design pattern for consistency.

### Internationalization

- Translations are stored in `public/locales/{lng}/translation.json`
- Language detection order: URL path → cookie → HTML tag → localStorage → subdomain
- Default language: Finnish (`fi`)
- Access translations in components: `const { t } = useTranslation();` then `t('key.path')`

### Form Handling

Forms use the `formService.ts` utility:
- **Development mode**: Logs to console (localhost/127.0.0.1)
- **Production mode**: POSTs to `https://lkdv.fi/forms/send-form.php`
- Security: Shared token between frontend and PHP backend (`SECURITY_TOKEN`)
- Two form types: `contact` and `pilot`

## Key Patterns

### Page Structure
Most pages follow this pattern:
```tsx
import PageContainer from '../components/PageContainer';

const MyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer backgroundImage="/images/background.jpeg">
      <Card sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 3
      }}>
        <CardContent>
          {/* Content with white text */}
        </CardContent>
      </Card>
    </PageContainer>
  );
};
```

### Navigation Menu
The Navbar component has:
- Desktop: Dropdown menus for "Products" and "Services"
- Mobile: Hamburger menu with all navigation options
- Language switcher (FI/EN buttons)

## Deployment Notes

- **Build output**: `dist/` directory contains the static site
- **Apache config**: `.htaccess` must be deployed for routing and security headers
- **PHP handler**: Upload `send-form.php` to `public_html/forms/` directory
- **Static assets**: Images, locales, and compiled JS/CSS in `dist/assets/`
- The site uses absolute paths from root (`/`) as base, configured in `vite.config.ts`

## TypeScript Configuration

- Strict mode enabled with additional checks (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`)
- Module resolution: `bundler` mode (Vite-compatible)
- Target: ESNext
- JSX: `react-jsx` (automatic runtime)
- No source maps or declarations in production builds

## Testing in Development

When working with forms locally, check the browser console for form submission data since emails are not sent in dev mode. The form service automatically detects localhost and switches to console logging.

## Code Quality Status

### Lint & Build ✅
- **ESLint:** All checks passing (0 errors, 0 warnings)
- **TypeScript:** Compilation successful with strict mode enabled
- **Build:** Production build working correctly

### Known Considerations

#### Package Naming
The `package.json` has `"name": "nordic-ai-report"` which doesn't match the actual project (LKDV Solutions company website). Consider updating to `"lkdv-solutions-website"` for clarity.

#### Bundle Size
The production build generates a 775 kB JavaScript bundle. This is within acceptable range but could be optimized with code splitting if needed:
- Consider using dynamic imports for large route components
- Vite's `build.rollupOptions.output.manualChunks` can help optimize chunking

#### External Links
Currently, the only external link is to `https://lkdv.fi` in the footer. If a webshop or other external services exist, they should be added to the navigation.
