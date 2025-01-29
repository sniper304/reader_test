export const fallbackLng = 'uk';
export const englishLng = 'en';
export const languages = [fallbackLng, englishLng];
export const defaultNS = 'translation';

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS,
  debug = false,
) {
  return {
    debug,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
