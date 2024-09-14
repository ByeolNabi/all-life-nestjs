import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import { ShelterService } from './shelter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelterInfo } from 'src/entity/shelter_info.entity';
import { ShelterInfoRepository } from './shelter_info.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ShelterInfo])],
  controllers: [ShelterController],
  providers: [ShelterService, ShelterInfoRepository],
})
export class ShelterModule {}
