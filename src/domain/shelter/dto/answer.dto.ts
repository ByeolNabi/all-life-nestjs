import { IsNotEmpty, IsNumber } from 'class-validator';

export class AnswerDto {
  @IsNotEmpty()
  @IsNumber()
  q_id: number;
  @IsNumber()
  @IsNotEmpty()
  score: number;
}
