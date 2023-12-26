import { Module } from "@nestjs/common";
import { TodoController } from "./todo.controller";
import { todosProviders } from "./todos.providers";
import { TodosService } from "./todo.service";
import { DatabaseModule } from "src/config/mongo/database.module";


@Module({
  imports: [DatabaseModule],
  controllers: [TodoController],
  providers: [...todosProviders, TodosService]
})

export class TodosModule{}