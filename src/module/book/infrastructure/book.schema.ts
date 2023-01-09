import { AuthorSchema } from '../../../module/author/infrastructure/author.schema';
import { EntitySchema } from 'typeorm';
import { Book } from '../domain/book.entity';

export const BookSchema = new EntitySchema<Book>({
  name: 'Book',
  target: Book,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    title: {
      type: String,
    },
  },
  relations: {
    author: {
      type: 'many-to-one',
      target: AuthorSchema,
    },
  },
});
