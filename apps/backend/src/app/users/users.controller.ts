import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserRdo } from './rdo/create-user.rdo';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService){

  }

  @Post('register')
  public async createUser(@Body() createUserDto: CreateUserDto): Promise<CreateUserRdo> {
    const user = await this.usersService.createUser(createUserDto)

    return {
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
