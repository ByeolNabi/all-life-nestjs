import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { ShelterModule } from './domain/shelter/shelter.module';
import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UserModule, ShelterModule],
})
export class AppModule {}
