import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user-dto';
import { UserNotRegisteredException } from './exceptions/user-not-registered.exception';
import { UserPasswordWrongException } from './exceptions/user-password-wrong.exception';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository, private readonly jwtService: JwtService,){}

  public async createUser(createUserDto: CreateUserDto){
    let userEntity = new UserEntity(
      createUserDto.name,
      createUserDto.email,
      ''
    );

    userEntity = await userEntity.setPassword(createUserDto.password);

    const user = await this.usersRepository.createUser(userEntity);

    return user;
  }

  public async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;
    const existUser = await this.usersRepository.findUserByEmail(email);

    if (!existUser) {
      throw new UserNotRegisteredException(email);
    }

    const userEntity = new UserEntity(existUser.name, existUser.email, existUser.passwordHash);
    if (! await userEntity.comparePassword(password)) {
      throw new UserPasswordWrongException();
    }

    return userEntity.toObject();
  }

  public async login(name: string, email: string) {
    const payload = {
      name: name,
      email: email,
    }

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
