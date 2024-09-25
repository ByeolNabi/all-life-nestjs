import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { UserTypeEnum } from 'src/entity/enum/userType.enum';

export class SignUpDto {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  user_id: string;
  
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  password: string;
  
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: Boolean,
  })
  @IsNotEmpty()
  term: boolean;

  @ApiProperty({
    type: Number,
  })
  @IsNotEmpty()
  type: UserTypeEnum;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  language: string;
}
