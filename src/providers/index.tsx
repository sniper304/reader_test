'use client';

import { PropsWithChildren } from 'react';
import { ThemeContextProvider } from '@/contexts/ThemeContext';

export const GlobalProviders = ({ children }: PropsWithChildren) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};
