import { TodosService } from './todo.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { TodoDTO } from './todo.dto';
import {todos} from './todos-mock'

let todosData = todos

@Controller('todos')
export class TodoController {
  constructor(private todosService: TodosService){}
  
  @Get()
  async getTodos(): Promise<TodoDTO[]>{
    return this.todosService.findAll()
  }

  @Post()
  createTodo(@Body() createTodo: TodoDTO): Promise<TodoDTO> {
    return this.todosService.create(createTodo);
  }

  @Put(":id")
  updateTodo(@Body() updateTodo: TodoDTO, @Param("id") id): TodoDTO{
    todosData = todosData.map(todo => (todo.id===id?updateTodo:todo))
    return updateTodo
  }

  @Delete(":id")
  deleteTodo(@Param("id") id:string):TodoDTO{
    const todoToDelete = todosData.find(todo => todo.id === id);
    todosData = todosData.filter(todo => todo.id!==id)
    return todoToDelete
  }
}
