import { IsEmail, IsEmpty, IsNotEmpty, MinLength } from "class-validator";

export class CreatePersonalInformationAndAccountInfo {

}
export class CreateUserPersonalInformation {
    firstname: string;
    middlename: string;
    lastname: string;
    contactno: string;
}

export class CreateUserAccountInfo {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}
