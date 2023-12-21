import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserCredService } from './user-cred.service';
import { CreateUserCredDto } from './dto/create-user-cred.dto';
import { UpdateUserCredDto } from './dto/update-user-cred.dto';

@Controller('user-cred')
export class UserCredController {
  constructor(private readonly userCredService: UserCredService) {}

  @Post()
  create(@Body() createUserCredDto: CreateUserCredDto) {
    return this.userCredService.create(createUserCredDto);
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
