# Repository Guidelines

## Project Structure & Module Organization
- App entry: `main.tsx`, `App.tsx` (Vite + React 18).
- Pages in `pages/` (e.g., `HomePage.tsx`, `ServicesPage.tsx`).
- Shared UI in `components/` (e.g., `Navbar.tsx`, `Footer.tsx`).
- Theme in `theme/theme.ts` (MUI + Emotion).
- Utilities in `utils/` (e.g., `formService.ts`).
- Static assets and config in `public/` (`images/`, `locales/`, `.htaccess`, optional `CNAME`).
- Server helper in `forms/send-form.php`.
- Build output in `dist/`.

## Build, Test, and Development Commands
- `npm run dev`: Start local dev server with HMR.
- `npm run build`: Type-check and build to `dist/`.
- `npm run preview`: Serve the built site locally.
- `npm run lint`: Run ESLint over `ts/tsx` sources.
- `npm run deploy`: Publish `dist/` to GitHub Pages (runs `predeploy`).

## Coding Style & Naming Conventions
- TypeScript strict mode; 2-space indentation.
- React components/pages: PascalCase filenames (`Navbar.tsx`, `AboutPage.tsx`).
- Helpers/hooks: camelCase (`formService.ts`).
- Prefer functional components and React hooks.
- Externalize user-visible strings via i18n (`i18n.ts`, `public/locales`).
- Lint with ESLint + `@typescript-eslint`; fix warnings before PR.

## Testing Guidelines
- No automated tests configured yet. Contributions adding Vitest + React Testing Library are welcome.
- Until then, manually verify: page rendering, navigation, language switching, and form submissions (dev mode logs; production hits PHP handler).
- If adding tests, mirror filenames with `.test.tsx` colocated or in `__tests__/`; document `npm test` usage in the PR.

## Commit & Pull Request Guidelines
- Commits: concise, imperative present, scoped when useful (e.g., "Navbar: improve mobile menu").
- PRs: clear description, rationale, screenshots for UI, steps to verify, and linked issues. Ensure `npm run lint && npm run build` pass and i18n files updated when adding text.

## Security & Configuration Tips
- Keep `SECURITY_TOKEN` and endpoint URL in `utils/formService.ts` synchronized with `forms/send-form.php`; avoid committing real secrets.
- Update allowed origins in PHP when domains change.
- See `DEPLOYMENT.md` for hosting, routing (`.htaccess`), and publishing details.

