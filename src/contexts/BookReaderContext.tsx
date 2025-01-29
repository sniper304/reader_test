'use client';

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
  CSSProperties,
} from 'react';
import isEqual from 'lodash.isequal';
import {
  LOCAL_STORAGE_READER_KEY,
  LIGHT_THEME,
  DARK_THEME,
  SWIPE_TOP_DOWN,
  SWIPE_LEFT_RIGHT,
  ROBOTO_FONT_FAMILY,
} from '@/constants';
import { isServerSide } from '@/utils/serverSide';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/localStorage';
import { useThemeContext } from './ThemeContext';

export type BookReaderValuesProps = {
  comments: boolean;
  fontSize: number;
  font: string;
  theme: typeof LIGHT_THEME | typeof DARK_THEME;
  swipe: typeof SWIPE_TOP_DOWN | typeof SWIPE_LEFT_RIGHT;
  textAlign: boolean;
};

export type BookReaderContextProps = {
  bookReaderValues: BookReaderValuesProps;
  setBookReaderValues: Dispatch<SetStateAction<BookReaderValuesProps>>;
};

const DEFAULT_VALUES: BookReaderValuesProps = {
  comments: false,
  fontSize: 16,
  font: ROBOTO_FONT_FAMILY,
  theme: LIGHT_THEME as typeof LIGHT_THEME,
  swipe: SWIPE_TOP_DOWN as typeof SWIPE_TOP_DOWN,
  textAlign: false,
};

export const BookReaderContext = createContext<BookReaderContextProps>({
  bookReaderValues: DEFAULT_VALUES,
  setBookReaderValues: () => undefined,
});

export const BookReaderContextProvider = ({ children }: PropsWithChildren) => {
  const { changeTheme } = useThemeContext();
  const getCurrentThemeFromLocalStorage = useCallback(() => {
    if (isServerSide) {
      return DEFAULT_VALUES;
    }

    const themeFromLocalStorage = getFromLocalStorage(LOCAL_STORAGE_READER_KEY);

    if (!themeFromLocalStorage) return DEFAULT_VALUES;

    try {
      return JSON.parse(themeFromLocalStorage);
    } catch (error) {
      console.error(error);

      return DEFAULT_VALUES;
    }
  }, []);

  const [bookReaderValues, setBookReaderValues] =
    useState<BookReaderValuesProps>(() => getCurrentThemeFromLocalStorage());

  useEffect(() => {
    if (isEqual(bookReaderValues, getCurrentThemeFromLocalStorage())) return;

    setToLocalStorage(
      LOCAL_STORAGE_READER_KEY,
      JSON.stringify(bookReaderValues),
    );

    changeTheme(bookReaderValues.theme);
  }, [bookReaderValues, changeTheme]);

  return (
    <BookReaderContext.Provider
      value={{ bookReaderValues, setBookReaderValues }}
    >
      <div
        style={
          {
            '--bookreader-font': `${bookReaderValues.font}`,
            '--bookreader-font-size': `${bookReaderValues.fontSize}px`,
            '--bookreader-text-align': `${
              bookReaderValues.textAlign ? 'justify' : 'start'
            }`,
          } as CSSProperties
        }
        suppressHydrationWarning
      >
        {children}
      </div>
    </BookReaderContext.Provider>
  );
};

export const useBookReaderContext = () => useContext(BookReaderContext);
