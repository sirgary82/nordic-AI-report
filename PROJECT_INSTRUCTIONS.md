# Project Documentation: LKDV Solutions Website

This document provides comprehensive guidance for developers working on the LKDV Solutions website.

## Project Overview

**Project Name:** lkdv-solutions-website
**Version:** 0.0.0
**Type:** Single-page React application (SPA)
**Topic:** European Sovereign Intelligence - AI solutions for European businesses

## Technology Stack

### Core Technologies
*   **Framework**: React v18.3.1
*   **Language**: TypeScript v5.2.2 (strict mode enabled)
*   **Build Tool**: Vite v7.1.3
*   **UI Library**: Material-UI (MUI) v5.18.0 with Emotion
*   **Routing**: React Router v6.20.0
*   **Charts**: Chart.js v4.4.0
*   **Internationalization**: i18next v23.7.6

### Backend
*   **Form Handler**: PHP 5.32+ (send-form.php)
*   **Web Server**: Apache v2.4.65
*   **Email**: PHP mail() with sendmail

## Development Workflow

### Initial Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Development server runs at http://localhost:5173
```

### Development Commands
```bash
npm run dev          # Start Vite dev server with hot reload
npm run build        # TypeScript compilation + production build
npm run preview      # Preview production build locally
npm run lint         # Run ESLint checks
npm run deploy       # Build and deploy to GitHub Pages
```

### Code Quality Checks
Before committing code, always run:
```bash
npm run lint         # Must pass with 0 errors, 0 warnings
npm run build        # Must complete successfully
```

**Current Status:** ✅ All checks passing

## Design System

The website uses a custom "glassmorphism" design aesthetic throughout.

### Color Palette (theme/theme.ts)
*   **Primary**: `#2c3e50` (Dark Slate Blue)
*   **Secondary**: `#00f2ea` (Glowing Teal)
*   **Background**: `#e0e0e0` (Light Grey)
*   **Text**: `#ffffff` (White on dark backgrounds)

### Typography
*   **Font Family**: 'Roboto', sans-serif
*   **Headings (h1-h3)**:
    *   `color`: 'white'
    *   `fontWeight`: 700
    *   `textShadow`: '1px 1px 3px rgba(0,0,0,0.5)'
*   **Body Text**:
    *   `fontSize`: '1.1rem'
    *   `color`: 'white' (on dark backgrounds)

### Components Style Guide
*   **Cards**: Semi-transparent with glassmorphism effect
    *   `backgroundColor`: 'rgba(0, 0, 0, 0.4)'
    *   `backdropFilter`: 'blur(8px)'
    *   `border`: '1px solid rgba(255, 255, 255, 0.2)'
    *   `borderRadius`: 3 (or 12 for larger cards)

*   **Buttons** (Secondary/Contained):
    *   `variant`: 'contained'
    *   `color`: 'secondary' (teal)
    *   `size`: 'large'
    *   Teal background with white text

*   **Page Backgrounds**:
    *   Use `PageContainer` component
    *   Background images from `/images/` directory
    *   Fixed attachment, cover sizing

## Architecture

### File Structure
```
/
├── App.tsx              # Main app with Router and routes
├── main.tsx             # React entry point
├── i18n.ts              # i18next configuration
├── vite.config.ts       # Vite build config
├── tsconfig.json        # TypeScript strict config
├── components/          # Reusable components
│   ├── Navbar.tsx       # Navigation with dropdowns
│   ├── Footer.tsx       # Site footer
│   ├── PageContainer.tsx # Layout wrapper
│   └── report/          # Nordic AI Report components
├── pages/               # Page components (one per route)
├── theme/
│   └── theme.ts         # MUI theme configuration
├── utils/
│   └── formService.ts   # Form submission logic
└── public/
    ├── images/          # Static images
    ├── locales/         # Translations (en/fi)
    └── .htaccess        # Apache routing config
```

### Routes (defined in App.tsx)
- `/` - HomePage
- `/about` - AboutPage
- `/services` - ServicesPage
- `/platform` - PlatformPage
- `/pilot-program` - PilotProgramPage
- `/nordic-ai-report` - NordicAIReportPage
- `/legal` - LegalPage
- `/financial` - FinancialPage
- `/government` - GovernmentPage
- `/healthcare` - HealthcarePage
- `/contact` - ContactPage

### Internationalization

**Supported Languages:** Finnish (fi) and English (en)

**Language Detection Order:**
1. URL path
2. Cookie
3. HTML tag
4. localStorage
5. Subdomain

**Default Language:** Finnish (`fi`)

**Translation Files:**
- `public/locales/en/translation.json`
- `public/locales/fi/translation.json`

**Usage in Components:**
```typescript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  return <Typography>{t('nav_home')}</Typography>;
};
```

### Form Handling

**Contact Form:** `/contact`
**Pilot Program Form:** `/pilot-program`

**Development Mode (localhost):**
- Forms log submission data to console
- No actual emails sent
- Auto-detected by hostname

**Production Mode:**
- Forms POST to `https://lkdv.fi/forms/send-form.php`
- PHP script sends email to `info@lkdv.fi`
- Includes security token, rate limiting, spam filtering

**Security Note:** ⚠️ The frontend security token is hardcoded and publicly visible. This provides minimal security. Consider adding reCAPTCHA for production use.

## Deployment

### Production Build
```bash
npm run build
```
Output: `dist/` directory

### Deployment Steps
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to Server**
   - Upload entire contents of `dist/` → `public_html/`
   - Upload `forms/send-form.php` → `public_html/forms/`
   - Ensure `.htaccess` is uploaded

3. **Set Permissions**
   - Directories: 755 (rwxr-xr-x)
   - Files: 644 (rw-r--r--)
   - PHP script: 644

4. **Verify Deployment**
   - Visit https://lkdv.fi
   - Test all page navigation
   - Test language switching
   - Test contact form submission

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Hosting Environment

*   **Web Server**: Apache v2.4.65
*   **PHP Version**: 5.32.1
*   **Operating System**: Linux (Kernel 5.14.0-570.18.1.el9_6.x86_64)
*   **Architecture**: x86_64
*   **Sendmail Path**: `/usr/sbin/sendmail`
*   **Domain**: lkdv.fi

## TypeScript Configuration

The project uses strict TypeScript settings for maximum type safety:

```json
{
  "strict": true,
  "noUncheckedIndexedAccess": true,
  "exactOptionalPropertyTypes": true,
  "skipLibCheck": true,
  "forceConsistentCasingInFileNames": true
}
```

Always ensure code passes `tsc` compilation with zero errors.

## Code Quality Standards

### Linting
- ESLint configured with TypeScript parser
- React hooks plugin enabled
- No unused variables allowed (must start with `_` if intentionally unused)
- Maximum 0 warnings allowed in production builds

### Current Status
✅ **All checks passing:**
- ESLint: 0 errors, 0 warnings
- TypeScript: Compilation successful
- Build: Production build working
- Bundle size: 775 kB (acceptable, can be optimized with code splitting)

## Common Development Tasks

### Adding a New Page
1. Create page component in `pages/NewPage.tsx`
2. Add route in `App.tsx`:
   ```typescript
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation link in `Navbar.tsx` or `Footer.tsx`
4. Add translations in `public/locales/en/translation.json` and `fi/translation.json`

### Adding Translations
1. Edit `public/locales/en/translation.json`
2. Edit `public/locales/fi/translation.json`
3. Use in components: `t('your.key.here')`

### Updating Theme
- Edit `theme/theme.ts`
- Changes apply globally via MUI's ThemeProvider

## Security Considerations

### Known Issues
⚠️ **Hardcoded Security Token**: The frontend contains a hardcoded security token in `utils/formService.ts` that is publicly visible. This is a known limitation of client-side security.

### Current Protection Layers
- CORS origin validation (only allowed domains)
- Rate limiting (10 submissions per hour)
- Spam keyword filtering
- Email validation
- PHP mail headers validation

### Recommended Improvements
- [ ] Integrate reCAPTCHA v3
- [ ] Add honeypot fields
- [ ] Implement CSRF tokens
- [ ] Consider server-side form rendering

## Troubleshooting

### Build Errors
- Ensure all imports have correct paths
- Check TypeScript strict type compliance
- Verify all translation keys exist in both languages

### Form Not Working in Development
- Check browser console for logged form data
- Verify localhost detection is working
- Forms don't send emails in dev mode (by design)

### Apache Routing Issues
- Ensure `.htaccess` is uploaded to server
- Verify `mod_rewrite` is enabled
- Check that base URL in `vite.config.ts` is set to `/`

## Support and Contact

**Company:** LKDV Solutions Oy
**Website:** https://lkdv.fi
**Email:** info@lkdv.fi
**Office:** Maria 01, Lapinlahdenkatu 16, 00180 Helsinki, Finland

For technical issues with this codebase, contact the development team.
