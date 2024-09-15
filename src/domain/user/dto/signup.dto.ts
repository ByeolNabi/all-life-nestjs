import { IsNotEmpty } from 'class-validator';
import { UserTypeEnum } from 'src/entity/enum/userType.enum';
import { Language } from 'src/entity/language.entity';

export class SignUpDto {
  @IsNotEmpty()
  user_id: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  term: boolean;
  @IsNotEmpty()
  type: UserTypeEnum;
  
  language: Language;
}
