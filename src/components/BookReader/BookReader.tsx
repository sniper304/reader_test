'use client';

import { CSSProperties, Fragment } from 'react';
import classNames from 'classnames';
import { Book } from '@/types/global';

export type BookReaderProps = {
  book: Book;
  className?: string;
};

export const BookReader = ({ className, book }: BookReaderProps) => {
  const { description, id } = book;

  const toggleTopBar = () => {
    const topBar = document.getElementById('headerTopBar');
    topBar?.classList.toggle('hidden');
  };

  if (!description) {
    return null;
  }

  return (
    <div
      className={classNames(
        'flex flex-col w-full justify-center items-center',
        className,
      )}
    >
      <div
        className={classNames(
          'flex flex-col max-w-[900px] relative',
          className,
        )}
      >
        <div
          className="w-full max-w-[60%] h-full absolute left-1/4 z-10"
          onClick={toggleTopBar}
        />
        <h1
          className="font-bold"
          style={{
            fontSize: `calc(var(--bookreader-font-size) + 16px)`,
            fontFamily: 'var(--bookreader-font)',
            textAlign:
              'var(--bookreader-text-align)' as CSSProperties['textAlign'],
          }}
        >
          {description.title}
        </h1>
        <br />
        {description.paragraphs.map((paragraph, index) => {
          return (
            <Fragment key={`${id}-${index}`}>
              <p
                style={{
                  fontSize: `var(--bookreader-font-size)`,
                  fontFamily: 'var(--bookreader-font)',
                  textAlign:
                    'var(--bookreader-text-align)' as CSSProperties['textAlign'],
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{paragraph}
              </p>
              {description.paragraphs[index + 1] && <br />}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
