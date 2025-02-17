import type { Metadata } from 'next';
import { PageLayout } from '@/components/PageLayout';
import { TopBarHeader } from '@/components/TopBarHeader';
import { BookPromiseParams } from '@/types/routes';
import { fallbackLng } from '@/i18n/settings';
import { translate } from '@/i18n';
import { Book } from '@/types/global';
import { BookReader } from '@/components/BookReader';
import { BookReaderProviders } from '@/providers/bookReaderProviders';
import { BookReaderRightTopBar } from '@/components/BookReaderRightTopBar';

const BOOK: Book = {
  id: 1,
  title: 'Книга',
  description: {
    title: 'Розділ 1. Знайомство.',
    paragraphs: [
      'Коли я вперше побачила цю жінку, яка представилася як Куратор, мені здалося, що вона хотіла мене вбити. Але її посмішка, яка на той момент здалася мені доброю та щирою, змусила мене думати про інше. Жінка запропонувала мені угоду: я працюю на неї якийсь час, а вона забезпечує мене будинком та захистом. На той момент мені, чорт забирай, було одинадцять років, але, як сказала Куратор, вік не має значення. ',
      'Людина може бути дурною і марною в сорок років, а може бути розумною лише в десять. І це звучало настільки переконливо, що погодилася на її пропозицію. Як тільки жінка торкнулася моєї руки, ми перемістилися зовсім в інше місце. Воно сильно відрізнялося від того, де ми знаходилися кілька секунд тому, наче це інша планета, інший вимір.',
      'Куратор познайомила мене з усім складом робітників на цьому, як мені здалося, заводі. Збоку все виглядало як у звичайному офісі: хтось сидів за друкарською машиною, щось старанно друкуючи, а хтось-то, між іншим, забігав до кабінету, забираючи списані аркуші і несучи їх в інше місце, де надалі це ставало. завданням, яке потрібно без відмовок виконати.',
      'Коли я вперше побачила цю жінку, яка представилася як Куратор, мені здалося, що вона хотіла мене вбити. Але її посмішка, яка на той момент здалася мені доброю та щирою, змусила мене думати про інше. Жінка запропонувала мені угоду: я працюю на неї якийсь час, а вона забезпечує мене будинком та захистом. На той момент мені, чорт забирай, було одинадцять років, але, як сказала Куратор, вік не має значення. ',
      'Людина може бути дурною і марною в сорок років, а може бути розумною лише в десять. І це звучало настільки переконливо, що погодилася на її пропозицію. Як тільки жінка торкнулася моєї руки, ми перемістилися зовсім в інше місце. Воно сильно відрізнялося від того, де ми знаходилися кілька секунд тому, наче це інша планета, інший вимір.',
      'Куратор познайомила мене з усім складом робітників на цьому, як мені здалося, заводі. Збоку все виглядало як у звичайному офісі: хтось сидів за друкарською машиною, щось старанно друкуючи, а хтось-то, між іншим, забігав до кабінету, забираючи списані аркуші і несучи їх в інше місце, де надалі це ставало. завданням, яке потрібно без відмовок виконати.',
      'Коли я вперше побачила цю жінку, яка представилася як Куратор, мені здалося, що вона хотіла мене вбити. Але її посмішка, яка на той момент здалася мені доброю та щирою, змусила мене думати про інше. Жінка запропонувала мені угоду: я працюю на неї якийсь час, а вона забезпечує мене будинком та захистом. На той момент мені, чорт забирай, було одинадцять років, але, як сказала Куратор, вік не має значення. ',
      'Людина може бути дурною і марною в сорок років, а може бути розумною лише в десять. І це звучало настільки переконливо, що погодилася на її пропозицію. Як тільки жінка торкнулася моєї руки, ми перемістилися зовсім в інше місце. Воно сильно відрізнялося від того, де ми знаходилися кілька секунд тому, наче це інша планета, інший вимір.',
      'Куратор познайомила мене з усім складом робітників на цьому, як мені здалося, заводі. Збоку все виглядало як у звичайному офісі: хтось сидів за друкарською машиною, щось старанно друкуючи, а хтось-то, між іншим, забігав до кабінету, забираючи списані аркуші і несучи їх в інше місце, де надалі це ставало. завданням, яке потрібно без відмовок виконати.',
    ],
  },
  createdAt: '2025-01-27T10:45:31.562Z',
  updatedAt: '2025-01-30T10:45:31.562Z',
};

export async function generateMetadata({
  params,
}: {
  params: BookPromiseParams;
}): Promise<Metadata> {
  const { lang = fallbackLng, bookId } = await params;
  const { t } = await translate(lang, 'book');

  return {
    title: t('titleById', { id: bookId }),
    description: t('descriptionById', { id: bookId }),
  };
}

export default async function BookReaderPage({
  params,
}: {
  params: BookPromiseParams;
}) {
  const { lang } = await params;

  return (
    <BookReaderProviders>
      <PageLayout
        topBarProps={{
          leftNode: <TopBarHeader title={`${BOOK.title} - ${lang}`} />,
          rightNode: <BookReaderRightTopBar />,
        }}
      >
        <BookReader book={BOOK} />
      </PageLayout>
    </BookReaderProviders>
  );
}
