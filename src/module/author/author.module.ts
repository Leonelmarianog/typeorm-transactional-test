import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorMapper } from './application/mapper/author.mapper';
import { AUTHOR_REPOSITORY } from './application/repository/author.repository.interface';
import { AuthorService } from './application/service/author.service';
import { AuthorRepository } from './infrastructure/author.repository';
import { AuthorSchema } from './infrastructure/author.schema';
import { AuthorController } from './interface/author.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorSchema])],
  controllers: [AuthorController],
  providers: [
    {
      provide: AUTHOR_REPOSITORY,
      useClass: AuthorRepository,
    },
    AuthorService,
    AuthorMapper,
  ],
})
export class AuthorModule {}
