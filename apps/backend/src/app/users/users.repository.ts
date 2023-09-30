import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService){}

  public async findUserByEmail(email: string){
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    return user;
  }

  public async createUser(userEntity: UserEntity){
    const entityData = userEntity.toObject();

    return this.prisma.user.create({
      data: entityData
    });
  }
}
