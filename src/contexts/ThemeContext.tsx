'use client';

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/localStorage';
import { LOCAL_STORAGE_THEME_KEY, LIGHT_THEME, DARK_THEME } from '@/constants';
import { isServerSide } from '@/utils/serverSide';

export type ThemeContextProviderProps = {
  theme?: typeof LIGHT_THEME | typeof DARK_THEME;
  toggleScheme: () => void;
  changeTheme: (nextTheme: typeof LIGHT_THEME | typeof DARK_THEME) => void;
};

export const ThemeContext = createContext<ThemeContextProviderProps>({
  theme: undefined,
  toggleScheme: () => undefined,
  changeTheme: () => undefined,
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const toggleDocumentSchema = useCallback(() => {
    if (isServerSide) return;

    const nextVariant =
      getFromLocalStorage(LOCAL_STORAGE_THEME_KEY) || LIGHT_THEME;

    if (nextVariant === DARK_THEME) {
      document.documentElement.dataset.theme = DARK_THEME;

      return;
    }

    document.documentElement.dataset.theme = LIGHT_THEME;
  }, []);

  const getCurrentThemeFromLocalStorage = useCallback(() => {
    if (isServerSide) {
      return;
    }

    const themeFromLocalStorage =
      getFromLocalStorage(LOCAL_STORAGE_THEME_KEY) || LIGHT_THEME;

    if (
      !themeFromLocalStorage ||
      ![DARK_THEME, LIGHT_THEME].includes(themeFromLocalStorage)
    ) {
      return LIGHT_THEME;
    }

    return themeFromLocalStorage as typeof LIGHT_THEME;
  }, []);

  const [theme, setTheme] = useState<
    typeof LIGHT_THEME | typeof DARK_THEME | undefined
  >(isServerSide ? undefined : () => getCurrentThemeFromLocalStorage());

  const toggleScheme = useCallback(() => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

      setToLocalStorage(LOCAL_STORAGE_THEME_KEY, nextTheme);
      toggleDocumentSchema();

      return nextTheme;
    });
  }, []);

  const changeTheme = useCallback(
    (nextTheme: typeof LIGHT_THEME | typeof DARK_THEME) => {
      setToLocalStorage(LOCAL_STORAGE_THEME_KEY, nextTheme);
      toggleDocumentSchema();
    },
    [],
  );

  useEffect(() => {
    toggleDocumentSchema();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleScheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
