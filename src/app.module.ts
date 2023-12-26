import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './modules/todo/todo.controller';
import { TodosModule } from './modules/todo/todos.module';
import { TodosService } from './modules/todo/todo.service';
import { todosProviders } from './modules/todo/todos.providers';
import { databaseProviders } from './config/mongo/database.providers';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [TodosModule],
  controllers: [AppController, TodoController, UserController],
  providers: [AppService,TodosService,...todosProviders,
     ...databaseProviders, UserService, PrismaService],
  exports: []
})
export class AppModule {}
