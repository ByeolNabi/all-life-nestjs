import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import * as config from 'config';

const jwtConfig = config.get('jwt');
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions: {
        expiresIn: jwtConfig.expiresIn,
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
