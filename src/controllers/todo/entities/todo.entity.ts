import { Timestamp } from "typeorm";

export class Todo {
    static collectionName = 'todo';

    name: string;
    dueDate: Date;
}
