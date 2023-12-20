import { Module } from '@nestjs/common';
import { UserCredService } from './user-cred.service';
import { UserCredController } from './user-cred.controller';

@Module({
  controllers: [UserCredController],
  providers: [UserCredService],
})
export class UserCredModule {}
