import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService){}

  sayHello(){
    console.log('Hello from UsersRepository!!!');
  }

  public async createUser(userEntity: UserEntity){
    const entityData = userEntity.toObject();

    return this.prisma.user.create({
      data: entityData
    });
  }
}
