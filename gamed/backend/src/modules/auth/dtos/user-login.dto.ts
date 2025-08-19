import { ApiProperty } from '@nestjs/swagger';

export class UserLoginDto {
  @ApiProperty({
    example: 'jane.doe@example.com',
    description: 'User email for login',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: 'Password@123',
    description: 'User password for login authentication',
    required: true,
  })
  password: string;
}
