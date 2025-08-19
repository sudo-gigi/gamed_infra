import { Body, Controller, Param, Patch, Delete, Get } from '@nestjs/common';
import { UserService } from './user.service';
import UpdateUserRecordOptions from './type/update-user-type';
import DeleteUserRecordOptions from './type/delete-user-type';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch(':user_id')
  updateUser(
    @Body() updatePayload: Record<string, unknown>,
    @Param(':user_id') userId: string,
  ) {
    const updateUserPayload: UpdateUserRecordOptions = {
      updatePayload,
      identifierOptions: { id: userId },
      transactionOptions: { useTransaction: false },
    };

    return this.userService.updateUser(updateUserPayload);
  }

  @Delete('user_id')
  deleteUser(@Param('user_id') userId: string) {
    const deletePayload: DeleteUserRecordOptions = {
      identifierOptions: { id: userId },
      transactionOptions: { useTransaction: false },
    };

    return this.userService.deleteUser(deletePayload);
  }

  @Get('user_id')
  getUser(@Param('usr_id') userId: string) {
    return this.userService.getById(userId);
  }
}
