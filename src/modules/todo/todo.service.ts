import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { TodoDTO } from "./todo.dto";


@Injectable()
export class TodosService{
  constructor(
    @Inject('TODO_MODEL')
    private todoModel: Model<TodoDTO>,
  ){}

  async create(createTodo: TodoDTO): Promise<TodoDTO>{
    const todosList = await this.findAll()
    const newTodo: TodoDTO = {
      id: (todosList.length + 1).toString(),
      ...createTodo
    }
    const createdTodo = new this.todoModel(newTodo)
    return createdTodo.save()
  }

  async findAll(): Promise<TodoDTO[]>{
    return this.todoModel.find().exec()
  }
}