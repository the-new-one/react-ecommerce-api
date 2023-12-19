import { Timestamp } from "typeorm";

export class CreateTodoDto {
    name: string;
    dueDate: Timestamp;
}
