import { Injectable } from '@nestjs/common';
import { CreateUserPersonalInformation } from './dto/create-user-cred.dto';
import { UpdateUserCredDto } from './dto/update-user-cred.dto';

@Injectable()
export class UserCredService {
  create(createUserCredDto: CreateUserPersonalInformation) {
    return 'This action adds a new userCred';
  }

  findAll() {
    return `This action returns all userCred`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userCred`;
  }

  update(id: number, updateUserCredDto: UpdateUserCredDto) {
    return `This action updates a #${id} userCred`;
  }

  remove(id: number) {
    return `This action removes a #${id} userCred`;
  }
}
