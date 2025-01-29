'use client';

import { generatePath as generateRoutePath } from 'react-router';
import { useParams } from 'next/navigation';

import { fallbackLng } from '@/i18n/settings';
import { AllApplicationParams } from '@/types/routes';

export const useGeneratePath = () => {
  const { lang, ...params } = useParams<AllApplicationParams>();

  const generatePath = (
    url: string,
    routeParams: Record<string, string | number> = params,
  ) => {
    const nextUrl = generateRoutePath(url, routeParams);

    if (lang === fallbackLng) {
      return nextUrl;
    }

    return `/${lang}${nextUrl.startsWith('/') ? '' : '/'}${nextUrl}`;
  };

  return generatePath;
};
