import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthGuardService } from './auth-guard/auth-guard.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthGuardService],
})
export class AuthModule {}
