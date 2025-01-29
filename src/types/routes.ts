export type LanguageParams = {
  lang: string;
};

export type BookByIdParams = {
  bookId: string;
} & LanguageParams;

export type LanguagePromiseParams = Promise<LanguageParams>;

export type BookPromiseParams = Promise<BookByIdParams>;

export type AllApplicationParams = BookByIdParams;
