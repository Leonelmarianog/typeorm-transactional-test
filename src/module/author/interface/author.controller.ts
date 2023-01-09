import { Controller, Get } from '@nestjs/common';
import { BaseController } from '../../../common/interface/base.controller';
import { AuthorDto } from '../application/dto/author.dto';
import { AuthorMapper } from '../application/mapper/author.mapper';
import { AuthorService } from '../application/service/author.service';

@Controller('author')
export class AuthorController extends BaseController {
  constructor(private readonly service: AuthorService, private readonly mapper: AuthorMapper) {
    super();
  }

  @Get('/')
  async findAll(): Promise<AuthorDto[]> {
    const authors = await this.service.getAll();
    return authors.map((author) => this.mapper.map(author));
  }
}
