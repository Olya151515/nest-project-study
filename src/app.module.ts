import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ArticlesModule } from './articles/articles.module';
import { CommentsModule } from './comments/comments.module';
import configuration from './configs/configuration';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),

    UsersModule,
    ArticlesModule,
    CommentsModule,
  ],
})
export class AppModule {}
