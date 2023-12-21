import { PartialType } from '@nestjs/mapped-types';
import { CreateUserPersonalInformation } from './create-user-cred.dto';

export class UpdateUserCredDto extends PartialType(CreateUserPersonalInformation) {}
