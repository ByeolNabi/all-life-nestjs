import { Injectable } from '@nestjs/common';
import { ShelterInfoRepository } from './shelter_info.repository';

@Injectable()
export class ShelterService {
  constructor(private shelterInfoRepository: ShelterInfoRepository) {}
  async getShelterInfo(id: number) {
    return this.shelterInfoRepository.find({ where: { shelter_info_id: id } });
  }
}
