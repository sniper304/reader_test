'use client';

import { useBookReaderContext } from '@/contexts/BookReaderContext';
import { Row } from './components/Row';
import CommentsIcon from '@/assets/CommentsIcon';
import FontSizeIcon from '@/assets/FontSIzeIcon';
import ThemePaletteIcon from '@/assets/ThemePaletteIcon';
import FontIcon from '@/assets/FontIcon';
import SwipePageIcon from '@/assets/SwipePageIcon';
import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';
import { LanguageParams } from '@/types/routes';
import {
  ARIAL_FONT_FAMILY,
  DARK_THEME,
  LIGHT_THEME,
  ROBOTO_FONT_FAMILY,
  SWIPE_LEFT_RIGHT,
  SWIPE_TOP_DOWN,
} from '@/constants';
import { GroupButtonSelect } from '../GroupButtonSelect';
import { FontSelect } from '../FontSelect';
import { Switch } from '../Switch';

export const BookReaderSettings = () => {
  const { lang } = useParams<LanguageParams>();
  const { bookReaderValues, setBookReaderValues } = useBookReaderContext();
  const { t } = useTranslation(lang, 'book');

  const onCommentsChange = (value: string) => {
    setBookReaderValues((prev) => ({
      ...prev,
      comments: value === 'true',
    }));
  };

  const onSwipeDirectionChange = (value: string) => {
    setBookReaderValues((prev) => ({
      ...prev,
      swipe: value as typeof SWIPE_LEFT_RIGHT,
    }));
  };

  const onThemeChange = (value: string) => {
    setBookReaderValues((prev) => ({
      ...prev,
      theme: value as typeof LIGHT_THEME,
    }));
  };

  const onFontSizeChange = (value: string) => {
    setBookReaderValues((prev) => {
      let nextValue = prev.fontSize;

      if (value === 'less') {
        nextValue -= 6;

        if (nextValue <= 10) nextValue = 10;
      } else {
        nextValue += 6;
        if (nextValue >= 22) nextValue = 22;
      }

      return {
        ...prev,
        fontSize: nextValue,
      };
    });
  };

  const onFontFamilyChange = (value: string) => {
    setBookReaderValues((prev) => ({
      ...prev,
      font: value,
    }));
  };

  const onTextAlignChange = (value: boolean) => {
    setBookReaderValues((prev) => ({
      ...prev,
      textAlign: value,
    }));
  };

  return (
    <div className="px-4 py-2 flex flex-col gap-6">
      <Row icon={<CommentsIcon />} title={t('comments')}>
        <GroupButtonSelect
          options={[
            { label: t('hide'), value: 'false' },
            { label: t('show'), value: 'true' },
          ]}
          onChange={onCommentsChange}
          selectedValue={String(bookReaderValues.comments)}
        />
      </Row>

      <Row icon={<FontSizeIcon />} title={t('fontSize')}>
        <GroupButtonSelect
          options={[
            { label: t('less'), value: 'less' },
            { label: t('more'), value: 'more' },
          ]}
          onChange={onFontSizeChange}
        />
      </Row>

      <Row icon={<ThemePaletteIcon />} title={t('theme')}>
        <GroupButtonSelect
          options={[
            { label: t('lighter'), value: LIGHT_THEME },
            { label: t('darker'), value: DARK_THEME },
          ]}
          onChange={onThemeChange}
        />
      </Row>

      <Row icon={<FontIcon />} title={t('font')}>
        <FontSelect
          selectedValue={bookReaderValues.font}
          options={[
            { label: ARIAL_FONT_FAMILY, value: ARIAL_FONT_FAMILY },
            {
              label: ROBOTO_FONT_FAMILY,
              value: ROBOTO_FONT_FAMILY,
            },
          ]}
          onChange={onFontFamilyChange}
        />
      </Row>

      <Row icon={<SwipePageIcon />} title={t('pageSwipe')}>
        <GroupButtonSelect
          options={[
            { label: t('topDown'), value: SWIPE_TOP_DOWN },
            { label: t('leftRight'), value: SWIPE_LEFT_RIGHT },
          ]}
          onChange={onSwipeDirectionChange}
          selectedValue={String(bookReaderValues.swipe)}
        />
      </Row>

      <div className="w-full h-[1px] bg-borderPrimary" />

      <div className="flex items-center justify-between mb-4">
        <p>{t('textWrapping')}</p>
        <Switch
          checked={bookReaderValues.textAlign}
          onChange={onTextAlignChange}
        />
      </div>
    </div>
  );
};
