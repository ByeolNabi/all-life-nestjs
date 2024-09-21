import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class ShelterUuidDto {
  @IsNotEmpty()
  uuid: string;
}
