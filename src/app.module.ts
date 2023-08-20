import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import datasource from 'db.config';
import { ConfigModule } from '@nestjs/config';
import { Pet } from './pet.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(datasource),
    TypeOrmModule.forFeature([User, Pet]), //this will let us use the User entity as a Repository in the app service or anywhere in the modules
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
