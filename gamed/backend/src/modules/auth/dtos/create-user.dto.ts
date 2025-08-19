import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'jane.doe@example.con',
    description: 'User email address',
  })
  email: string;

  @ApiProperty({
    example: 'sudo-gigi',
    description: 'unique Username',
  })
  username: string;

  @ApiProperty({
    example: 'Password@123',
    description: 'User that meets security requirements',
  })
  password: string;
}
