import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './modules/todo/todo.controller';
import { TodosModule } from './modules/todo/todos.module';
import { TodosService } from './modules/todo/todo.service';
import { todosProviders } from './modules/todo/todos.providers';
import { databaseProviders } from './config/mongo/database.providers';

@Module({
  imports: [TodosModule],
  controllers: [AppController, TodoController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
