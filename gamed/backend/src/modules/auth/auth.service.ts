import { Injectable, HttpStatus } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserLoginDto } from './dtos/user-login.dto';
import * as SYS_MSG from '../../shared/system-messages';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { AuthProvider, User } from '../user/model/user.model';
import { CustomHttpException } from 'src/shared/custom.exception';
import CreateUserRecordOptions from '../user/type/create-user-type';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async createNewUser(CreateUserDto: CreateUserDto) {
    const { email, password, username } = CreateUserDto;

    const userRecord = await this.userService.getByEmail(email);
    if (userRecord !== null) {
      throw new CustomHttpException(
        SYS_MSG.USER_ALREADY_EXISTS,
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const userPayload = {
      email,
      password: hashedPassword,
      username,
      AuthProvider: AuthProvider.LOCAL,
      isEmailVerified: false,
    };

    const createUserPayload: CreateUserRecordOptions = {
      createPayload: userPayload,
      transactionOptions: { useTransaction: false },
    };

    const createdUser = await this.userService.createUser(createUserPayload);
    if (!createdUser) {
      throw new CustomHttpException(
        SYS_MSG.USER_CREATION_FAILED,
        HttpStatus.BAD_REQUEST,
      );
    }

    const { password: userPassword, ...payload } = createdUser;

    return {
      success: true,
      message: SYS_MSG.USER_CREATED_SUCCESSFULLY,
      access_token: this.generateToken(createdUser),
      data: {
        ...payload,
      },
    };
  }

  async login(loginDto: UserLoginDto) {
    const { email, password } = loginDto;
    const user = await this.userService.getByEmail(email);

    if (!user) {
      throw new CustomHttpException(
        SYS_MSG.INVALID_LOGIN_CREDENTIALS,
        HttpStatus.BAD_REQUEST,
      );
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new CustomHttpException(
        SYS_MSG.INVALID_LOGIN_CREDENTIALS,
        HttpStatus.BAD_REQUEST,
      );
    }

    const { password: userPassword, ...payload } = user;

    return {
      success: true,
      message: SYS_MSG.USER_LOGGED_IN_SUCCESSFULL,
      access_token: this.generateToken(user),
      data: {
        ...payload,
      },
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.getByEmail(email);
    if (!user) {
      return null;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return null;
    }

    return user;
  }

  private generateToken(user: User): string {
    const payload = { sub: user.id, email: user.email };
    return this.jwtService.sign(payload);
  }
}
