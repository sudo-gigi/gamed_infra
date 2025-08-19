import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractModelAction } from 'src/shared/abstract-model-action';
import { User } from './model/user.model';

@Injectable()
export class UserModelAction extends AbstractModelAction<User> {
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository, User);
  }
}
