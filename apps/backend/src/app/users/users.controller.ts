import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserRdo } from './rdo/create-user.rdo';
import { LoginUserDto } from './dto/login-user-dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

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
  public async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.usersService.verifyUser(loginUserDto);
    const userEntity =  this.usersService.login(user.name, user.email);

    return userEntity
  }

  @UseGuards(JwtAuthGuard)
  @Post('checkauth')
  public async checkToken(@Req() { user: payload }) {
    return payload;
  }
}
