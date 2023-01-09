import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BOOK_REPOSITORY } from './application/repository/book.repository.interface';
import { BookRepository } from './infrastructure/book.repository';
import { BookSchema } from './infrastructure/book.schema';
import { BookController } from './interface/book.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BookSchema])],
  controllers: [BookController],
  providers: [
    {
      provide: BOOK_REPOSITORY,
      useClass: BookRepository,
    },
  ],
})
export class BookModule {}
