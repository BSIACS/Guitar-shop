import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';


@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersRepository, UsersService, PrismaService],
})
export class UsersModule {}
