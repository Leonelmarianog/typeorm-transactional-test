import { Book } from '../../domain/book.entity';

export const BOOK_REPOSITORY = 'BOOK_REPOSITORY';

export interface IBookRepository {
  getAll(): Promise<Book[]>;
}
