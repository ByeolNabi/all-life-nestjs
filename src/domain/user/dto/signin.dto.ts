import { IsNotEmpty } from 'class-validator';

export class SignInDto {
  @IsNotEmpty()
  user_id: string;
  @IsNotEmpty()
  password: string;
}
