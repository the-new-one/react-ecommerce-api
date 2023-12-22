import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { UserCredService } from './user-cred.service';
import { CreateUserAccountInfo, CreateUserPersonalInformation } from './dto/create-user-cred.dto';
import { UpdateUserCredDto } from './dto/update-user-cred.dto';
import { GenericResponse } from 'src/models/Generic';

@Controller('/user-cred')
export class UserCredController {
  constructor(private readonly userCredService: UserCredService) {}
  
  @Post()
  create(@Body() createUserCredDto: CreateUserPersonalInformation) {
    return this.userCredService.create(createUserCredDto);
  }
  
  @Post('/signin')
  @UsePipes(new ValidationPipe)
  verifyCredentials(@Body() user: CreateUserAccountInfo): Promise<GenericResponse<string>> {
    try{
      return this.userCredService.verifyCredentials(user);
    }
    catch(error) {
      console.log(error);
    }
  }

  @Get()
  findAll() {
    return this.userCredService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userCredService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserCredDto: UpdateUserCredDto) {
    return this.userCredService.update(+id, updateUserCredDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userCredService.remove(+id);
  }
}
