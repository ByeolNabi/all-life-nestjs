import { Controller, Get, Param } from '@nestjs/common';
import { ShelterService } from './shelter.service';

@Controller('shelter')
export class ShelterController {
  constructor(private shelterService: ShelterService) {}

  @Get('/:id')
  getShelterInfo(@Param('id') id: number) {
    return this.shelterService.getShelterInfo(id);
  }
}