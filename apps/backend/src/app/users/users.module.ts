import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtStrategy } from './authentication-strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { getJwtConfig } from '../config/jwt.config';


@Module({
  imports: [JwtModule.registerAsync({
    useFactory: getJwtConfig,
  })],
  controllers: [UsersController],
  providers: [UsersRepository, UsersService, PrismaService, JwtStrategy],
})
export class UsersModule {}
