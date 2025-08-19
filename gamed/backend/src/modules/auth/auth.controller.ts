import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserLoginDto } from './dtos/user-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() register: CreateUserDto) {
    return this.authService.createNewUser(register);
  }

  @Post('login')
  login(@Body() loginDto: UserLoginDto) {
    return this.authService.login(loginDto);
  }
}
