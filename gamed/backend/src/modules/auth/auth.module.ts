import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Add these imports
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { User } from '../user/model/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import authConfig from 'src/config/auth.config';
import { MailModule } from '../email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Add this line
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      // Change to registerAsync
      imports: [ConfigModule],
      useFactory: async () => ({
        global: true,
        secret: authConfig().jwtSecret,
        signOptions: { expiresIn: authConfig().jwt_Expiry },
      }),
      inject: [ConfigService],
    }),
    UserModule,
    MailModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
