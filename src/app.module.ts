import { Module } from '@nestjs/common';
import DBModule from './db/db.model';
import { UsersModule } from './user/user.module';
import { AuthenticationModule } from './authentification/authentication.module';
@Module({
  imports: [
    DBModule,
    AuthenticationModule,
    UsersModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
