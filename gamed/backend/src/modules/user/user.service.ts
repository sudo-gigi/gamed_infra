import { Injectable, HttpStatus } from '@nestjs/common';
import { UserModelAction } from './user.model-action';
import CreateUserRecordOptions from './type/create-user-type';
import ListUserRecordOptions from './type/list-user-type';
import DeleteUserRecordOptions from './type/delete-user-type';
import UpdateUserRecordOptions from './type/update-user-type';
import { promisify } from 'util';
import Handlebars from 'handlebars';
import { EmailQueueService } from '../email/email-queue.service';
import { CustomHttpException } from 'src/shared/custom.exception';
import * as fs from 'fs';

const isDevelopment = process.env.NODE_ENV === 'development';

@Injectable()
export class UserService {
  constructor(
    private userModelAction: UserModelAction,
    private emailQueue: EmailQueueService,
  ) {}

  async createUser(createUserPayload: CreateUserRecordOptions) {
    const user = await this.userModelAction.create(createUserPayload);

    if (!user) {
      throw new Error('Failed to create user');
    }

    const readFile = promisify(fs.readFile);
    const templatePath = `${isDevelopment ? 'src/modules/email/views' : 'dist/modules/email/views'}/welcome-email.hbs`;
    const templateSource = await readFile(templatePath, 'utf8');
    const template = Handlebars.compile(templateSource);

    const html = template({
      year: new Date().getFullYear(),
      name: user.username,
      ctalink: 'https://use-gamed.ddns.net/login '
    });

    if (user) {
      await this.emailQueue.addEmailToQueue(
        user.email,
        'Welcome to GamEd',
        '',
        html,
      );

      return user;
    }
  }

  async updateUser(updatePayload: UpdateUserRecordOptions) {
    return await this.userModelAction.update(updatePayload);
  }

  async deleteUser(deletePayload: DeleteUserRecordOptions) {
    return await this.userModelAction.delete(deletePayload);
  }

  async getById(userId: string) {
    const query = { id: userId };
    return await this.userModelAction.get(query);
  }

  async getByEmail(email: string, queryOptions?: object, relations?: object) {
    const query = { email };

    return await this.userModelAction.get(query, queryOptions, relations);
  }

  async listUsers(listRecordOptions: ListUserRecordOptions) {
    const { paginationPayload, filterRecordOptions } = listRecordOptions;

    if (paginationPayload) {
      const { limit, page } = paginationPayload;
      paginationPayload.page = page !== null && page !== undefined ? page : 1;
      paginationPayload.limit =
        limit !== null && limit !== undefined ? limit : 10;
    }

    const listOptions = { paginationPayload, filterRecordOptions };
    return await this.userModelAction.list(listOptions);
  }
}
