'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { API_ROUTES } from '@/config/routes';
import { Book } from '@/types/global';
import { useGeneratePath } from '@/hooks/useGeneratePath';
import { useParams } from 'next/navigation';
import { LanguageParams } from '@/types/routes';
import { useTranslation } from '@/i18n/client';

export type BookCardProps = {
  book: Book;
  className?: string;
};

export const BookCard = ({ book, className }: BookCardProps) => {
  const generatePath = useGeneratePath();
  const { lang } = useParams<LanguageParams>();
  const { t } = useTranslation(lang, 'book');
  const { id, url, title } = book;

  return (
    <div
      className={classNames(
        'flex flex-col h-[200px] w-full sm:w-[300px] bg-slate-200 relative group',
        'transition delay-150 duration-300 ease-in-out rounded-xl',
        className,
      )}
    >
      <div className="w-full h-full rounded-xl">
        {url && (
          <img
            className="object-cover w-full h-full rounded-xl"
            loading="lazy"
            alt={title}
            src={url}
          />
        )}
      </div>
      <div
        className={classNames(
          'flex w-full items-center absolute bottom-4 justify-center bg-white hover:bg-primary',
        )}
      >
        <Link
          href={generatePath(API_ROUTES.bookById, { bookId: id })}
          className="flex w-full items-center justify-center"
          suppressHydrationWarning
        >
          {t('readBook')}
        </Link>
      </div>
    </div>
  );
};
