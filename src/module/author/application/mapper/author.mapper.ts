import { Injectable } from '@nestjs/common';
import { Author } from '../../domain/author.entity';
import { AuthorDto } from '../dto/author.dto';

@Injectable()
export class AuthorMapper {
  public map(source: Author): AuthorDto {
    return new AuthorDto(source.id, source.firstName, source.lastName);
  }
}
