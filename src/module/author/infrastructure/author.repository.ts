import { DataSource, Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { IAuthorRepository } from '../application/repository/author.repository.interface';
import { Author } from '../domain/author.entity';

@Injectable()
export class AuthorRepository implements IAuthorRepository {
  private readonly repository: Repository<Author>;

  constructor(private readonly dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(Author);
  }

  async getAll(): Promise<Author[]> {
    console.log('AAAAAAAAAA');
    return this.repository.find();
  }
}
