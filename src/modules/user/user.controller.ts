import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User as UserModel} from '@prisma/client';
import { UserService } from './user.service';
import { UserDTO } from "./user.dto";

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get()
  async getAllUser(): Promise<UserModel[]>{
    return this.userService.findAllUser()
  }

  @Post()
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Put(":id")
  async updateUser(@Body() updateUser: UserModel, @Param("id") id: string) :Promise<UserModel>{
    return this.userService.updateUser({where : {id: Number(id)}, data: {...updateUser}})
  }

  @Delete(":id")
  async deleteUser(@Param("id") id: string): Promise<UserModel>{
    const deletedUser = this.userService.deleteUser({id: Number(id)})
    return deletedUser
  }
}