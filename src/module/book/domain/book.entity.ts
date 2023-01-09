import { Author } from 'src/module/author/domain/author.entity';

export class Book {
  id: number;
  title: string;
  author: Author;
}
