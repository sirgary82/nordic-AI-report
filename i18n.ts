import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['fi', 'en'],
    fallbackLng: 'fi',
    defaultNS: 'translation',
    detection: {
      // Prefer explicit choice; default via <html lang> before navigator
      order: ['cookie', 'localStorage', 'htmlTag', 'navigator'],
      caches: ['cookie', 'localStorage'],
    },
    backend: {
      // Respect Vite base path in prod (supports subpaths like GH Pages)
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
    },
    react: {
      useSuspense: false,
    },
    load: 'languageOnly',
  });

// Keep <html lang> in sync for a11y/SEO and language detection
i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng;
  }
});

export default i18n;
