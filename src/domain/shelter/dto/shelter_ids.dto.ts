import { IsNotEmpty, IsNumber } from 'class-validator';

export class ShelterCodeDto {
  @IsNotEmpty()
  @IsNumber()
  c1: number;

  @IsNotEmpty()
  @IsNumber()
  c2: number;
}
