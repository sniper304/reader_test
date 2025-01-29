'use client';

import { Button } from '../Button';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { LanguageParams } from '@/types/routes';
import { fallbackLng, englishLng } from '@/i18n/settings';

export type LanguageSwitcherProps = {
  className?: string;
};

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const { lang } = useParams<LanguageParams>();
  const router = useRouter();
  const isDefaultLng = lang === fallbackLng;

  const onLanguageChangeClick = () => {
    router.push(
      isDefaultLng
        ? `/${englishLng}${pathname}`
        : pathname.replace(`/${lang}`, '') || '/',
    );
  };

  return (
    <div className="flex">
      <Button
        variant="primary"
        onClick={onLanguageChangeClick}
        className="uppercase"
      >
        {isDefaultLng ? englishLng : fallbackLng}
      </Button>
    </div>
  );
};
