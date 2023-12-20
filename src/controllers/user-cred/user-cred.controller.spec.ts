import { Test, TestingModule } from '@nestjs/testing';
import { UserCredController } from './user-cred.controller';
import { UserCredService } from './user-cred.service';

describe('UserCredController', () => {
  let controller: UserCredController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCredController],
      providers: [UserCredService],
    }).compile();

    controller = module.get<UserCredController>(UserCredController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
