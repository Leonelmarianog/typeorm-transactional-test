import { Controller, Get, Inject } from '@nestjs/common';
import { BOOK_REPOSITORY, IBookRepository } from '../application/repository/book.repository.interface';
import { Book } from '../domain/book.entity';

@Controller('book')
export class BookController {
  constructor(
    @Inject(BOOK_REPOSITORY)
    private readonly repository: IBookRepository,
  ) {}

  @Get('/')
  async findAll(): Promise<Book[]> {
    return this.repository.getAll();
  }
}
