import 'i18next';

import resources from '../i18n/resources.js';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: typeof resources;
  }
}
