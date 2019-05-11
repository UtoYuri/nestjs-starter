import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { CommonModule } from './modules/common/common.module';
import { databaseProviders } from './database/database.providers';

@Module({
  imports: [CommonModule, UsersModule],
  providers: [...databaseProviders]
})
export class AppModule {}
