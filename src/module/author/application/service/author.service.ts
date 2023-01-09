import { Inject, Injectable } from '@nestjs/common';
import { Transactional } from 'typeorm-transactional';
import { AUTHOR_REPOSITORY, IAuthorRepository } from '../repository/author.repository.interface';

@Injectable()
export class AuthorService {
  constructor(@Inject(AUTHOR_REPOSITORY) private readonly repository: IAuthorRepository) {}

  @Transactional()
  async getAll() {
    console.log('AAAAAAAAAA');
    return this.repository.getAll();
  }
}
