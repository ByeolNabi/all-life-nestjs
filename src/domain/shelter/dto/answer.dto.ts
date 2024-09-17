import { IsNotEmpty, IsNumber } from 'class-validator';
import { User } from 'src/entity/user.entity';

export class AnswerDto {
  @IsNotEmpty()
  @IsNumber()
  q_id: number;
  @IsNotEmpty()
  @IsNumber()
  shelter_info_id: number;
  @IsNotEmpty()
  score: number;
}
