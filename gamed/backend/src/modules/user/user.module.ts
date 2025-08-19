import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserModelAction } from './user.model-action';
import { MailModule } from '../email/email.module';
import { User } from './model/user.model';
import { EntitySchema } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([User, EntitySchema]), MailModule],
  controllers: [UserController],
  providers: [UserModelAction, UserService, EntitySchema],
  exports: [UserService, UserModelAction],
})
export class UserModule {}
