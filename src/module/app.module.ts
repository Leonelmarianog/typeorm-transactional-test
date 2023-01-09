import { DataSource } from 'typeorm';

import { addTransactionalDataSource } from 'typeorm-transactional/dist';

import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { datasourceOptions } from '../../ormconfig';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...datasourceOptions,
        autoLoadEntities: true,
      }),
      dataSourceFactory: async (options) => {
        return addTransactionalDataSource(new DataSource(options));
      },
    }),
    AuthorModule,
    BookModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
