import { DataSource, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { Book } from '../domain/book.entity';
import { IBookRepository } from '../application/repository/book.repository.interface';

@Injectable()
export class BookRepository implements IBookRepository {
  private readonly repository: Repository<Book>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(Book);
  }

  async getAll(): Promise<Book[]> {
    return this.repository.find({
      relations: ['author'],
    });
  }
}
