import { PageLayout } from '@/components/PageLayout';
import { TopBarHeader } from '@/components/TopBarHeader';
import { translate } from '@/i18n';
import { LanguagePromiseParams } from '@/types/routes';

export default async function NotFound({
  params,
}: {
  params: LanguagePromiseParams;
}) {
  const { lang } = await params;
  const { t } = await translate(lang, 'notFound');

  return (
    <PageLayout topBarProps={{ leftNode: <TopBarHeader title={t('title')} /> }}>
      <div className="flex flex-col gap-4 items-center justify-center flex-1">
        <h2>{t('title')}</h2>
        <p>{t('description')}</p>
      </div>
    </PageLayout>
  );
}
