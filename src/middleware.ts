import { NextResponse, MiddlewareConfig } from 'next/server';
import type { NextRequest } from 'next/server';
import { fallbackLng, languages } from './i18n/settings';
import { getLocaleLanguage } from './utils/i18n';

const PUBLIC_FILE = /\.(.*)$/;

export const config: MiddlewareConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
  ],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  const currentLocale = getLocaleLanguage(pathname);
  const initializedLocale = getLocaleLanguage(pathname, true);

  // Skip _next, api, assets routes
  if (
    pathname.includes('_next') ||
    pathname.includes('api') ||
    pathname.includes('assets') ||
    PUBLIC_FILE.test(pathname)
  )
    return;

  const isLocaleExist = languages.some((lang) => lang === currentLocale);

  if (isLocaleExist) {
    return;
  }

  const nextUrl = new URL(
    `/${initializedLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
    req.url,
  );

  const response =
    initializedLocale === fallbackLng
      ? NextResponse.rewrite(nextUrl)
      : NextResponse.redirect(nextUrl);

  return response;
}
