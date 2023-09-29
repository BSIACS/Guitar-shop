import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.entity';


@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository){}

  sayHello(){
    this.usersRepository.sayHello();
  }

  public async createUser(createUserDto: CreateUserDto){
    let userEntity = new UserEntity(
      createUserDto.name,
      createUserDto.email,
    );

    userEntity = await userEntity.setPassword(createUserDto.password);

    const user = await this.usersRepository.createUser(userEntity)

    return user;
  }
}
