import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService){

  }

  @Post('register')
  public async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.createUser(createUserDto)

    return {
      id: user.id,
      email: user.email,
      name: user.name
    };
  }

  @Post('login')
  public async login() {
    return 'Hello from UsersController';
  }

  @Post('logout')
  public async logout() {
    return 'Hello from UsersController';
  }
}
