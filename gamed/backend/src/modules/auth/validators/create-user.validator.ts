import {
  IsString,
  IsEmail,
  IsStrongPassword,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserValidator {
  @ApiProperty({
    example: 'sudo-gigi',
    description: 'unique username',
  })
  @IsString()
  username: string;

  @ApiProperty({
    example: 'Strongp@ssword123',
    description:
      'User password(min 8 char, must included upper case, lower case, number and special character',
  })
  @IsString()
  @IsStrongPassword()
  @MinLength(8)
  password: string;

  @ApiProperty({
    example: 'User@example.com',
    description: 'User email',
  })
  @IsEmail()
  email: string;
}
