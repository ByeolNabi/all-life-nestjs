import { Body, Controller, Logger, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('유저 API')
export class UserController {
  constructor(private userService: UserService) {}

  private logger = new Logger('UserController');

  @Post('/signup')
  @ApiBody({ type: SignUpDto })
  signUp(@Body() signUpDto: SignUpDto) {
    this.logger.verbose(`UserController /signup is invoked`);
    return this.userService.signUp(signUpDto);
  }

  @Post('/signin')
  signIn(@Body() signInDto: SignInDto): Promise<{ accessToken: string }> {
    return this.userService.signIn(signInDto);
  }
}
