import { Inject, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { CollectionReference } from '@google-cloud/firestore';

@Injectable()
export class TodoService {
  constructor(@Inject(Todo.collectionName) private todoCollection: CollectionReference<Todo>) {

  }
  async create(createTodoDto: CreateTodoDto) {
    const {name, dueDate} = createTodoDto;
    const docRef = this.todoCollection.doc(name);
    await docRef.set({
      name,
      dueDate: new Date()
    })

    return 'This action adds a new todo';
  }

  findAll() {
    return `This action returns all todo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
