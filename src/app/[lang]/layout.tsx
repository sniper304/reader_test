import { dir } from 'i18next';
import { Roboto } from 'next/font/google';

import { LanguagePromiseParams } from '@/types/routes';
import { GlobalProviders } from '@/providers';

import { languages, fallbackLng } from '../../i18n/settings';
import '../../styles/globals.css';
import classNames from 'classnames';

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: LanguagePromiseParams;
}>) {
  const { lang = fallbackLng } = await params;

  return (
    <html lang={lang} dir={dir(lang)}>
      <head />
      <body className={classNames(roboto.variable, 'antialiased')}>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  );
}
