import type { Metadata } from 'next';
import { LanguagePromiseParams } from '@/types/routes';
import { fallbackLng } from '@/i18n/settings';
import { translate } from '@/i18n';
import { PageLayout } from '@/components/PageLayout';
import { Book } from '@/types/global';
import { BookList } from '@/components/BookList';
import { TopBarHeader } from '@/components/TopBarHeader';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const booksApiRequest = (): Promise<{ data: { books: Book[] } }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          books: [
            {
              id: 1,
              title: 'Тестова книга 1',
              createdAt: '2025-01-27T10:45:31.562Z',
              updatedAt: '2025-01-30T10:45:31.562Z',
              url: 'https://fastly.picsum.photos/id/630/200/200.jpg?hmac=X7UBUxsi2YahTLmW0-zKMMPOALeDjY5wPZGTPaGbDhU',
            },
            {
              id: 2,
              title: 'Тестова книга 2',
              createdAt: '2025-01-27T10:45:31.562Z',
              updatedAt: '2025-01-30T10:45:31.562Z',
            },
          ],
        },
      });
    }, 300);
  });
};

export async function generateMetadata({
  params,
}: {
  params: LanguagePromiseParams;
}): Promise<Metadata> {
  const { lang = fallbackLng } = await params;
  const { t } = await translate(lang, 'lang');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ReaderMainPage({
  params,
}: {
  params: LanguagePromiseParams;
}) {
  const {
    data: { books },
  } = await booksApiRequest();
  const { lang = fallbackLng } = await params;
  const { t } = await translate(lang, 'lang');

  return (
    <PageLayout
      topBarProps={{
        hideBackButton: true,
        leftNode: <TopBarHeader title={t('library')} />,
        rightNode: <LanguageSwitcher />,
      }}
    >
      <BookList books={books} />
    </PageLayout>
  );
}
