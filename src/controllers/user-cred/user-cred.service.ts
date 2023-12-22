import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserAccountInfo, CreateUserPersonalInformation } from './dto/create-user-cred.dto';
import { UpdateUserCredDto } from './dto/update-user-cred.dto';
import { GenericResponse } from 'src/models/Generic';

@Injectable()
export class UserCredService {
  constructor() {}
  create(createUserCredDto: CreateUserPersonalInformation) {
    return 'This action adds a new userCred';
  }

  async verifyCredentials(user: CreateUserAccountInfo): Promise<GenericResponse<string>> {
    try{
      return {
        code: 200,
        status: 1,
        message: 'oks',
        data: 'oks langs'
      }
    }
    catch(error) {
      console.log('catched')
      return {
        code: 401,
        status: 1,
        message: 'oks',
        data: 'oks langs'
      }
    }
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
