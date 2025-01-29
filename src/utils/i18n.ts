import { languages, fallbackLng } from '../i18n/settings';

export const getLocaleLanguage = (
  pathname: string,
  withDefaultFallback = false,
) => {
  const splitted = pathname.split('/').filter(Boolean);
  const filteredLanguages = splitted.filter((lang) => languages.includes(lang));

  const language = filteredLanguages[0];

  if (!language && withDefaultFallback) return fallbackLng;

  return language;
};
