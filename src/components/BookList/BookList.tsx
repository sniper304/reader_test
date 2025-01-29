'use client';

import classNames from 'classnames';
import { Book } from '@/types/global';
import { BookCard } from '../BookCard';

export type BookListProps = {
  books: Book[];
};

export const BookList = ({ books }: BookListProps) => {
  return (
    <div
      className={classNames(
        'w-full max-w-[900px] mx-auto flex flex-col gap-4 items-center',
      )}
    >
      {books.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
};
