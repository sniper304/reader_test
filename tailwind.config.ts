import type { Config } from 'tailwindcss';

export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        headerBackground: 'var(--header-bg)',
        buttonBgPrimary: 'var(--button-bg-primary)',
        buttonBgSecondary: 'var(--button-bg-secondary)',
        borderPrimary: 'var(--border-primary)',
        borderSecondary: 'var(--border-secondary)',
        disabled: 'var(--disabled)',
      },
      boxShadow: {
        default: '0px 1px 0px 0px #00000014',
      },
    },
  },
  plugins: [],
} satisfies Config;
