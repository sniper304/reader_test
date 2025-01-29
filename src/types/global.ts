export type Book = {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  url?: string | null;
  description?: {
    title: string;
    paragraphs: string[];
  };
};
