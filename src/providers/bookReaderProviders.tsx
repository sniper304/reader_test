'use client';

import { BookReaderContextProvider } from '@/contexts/BookReaderContext';
import { PropsWithChildren } from 'react';

export const BookReaderProviders = ({ children }: PropsWithChildren) => {
  return <BookReaderContextProvider>{children}</BookReaderContextProvider>;
};
