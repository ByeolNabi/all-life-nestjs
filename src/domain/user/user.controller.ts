import { Body, Controller, Logger, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

@Controller('user')
export class UserController {
  private logger = new Logger('UserController');

  constructor(private userService: UserService) {}

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto) {
    this.logger.verbose(`UserController /signup is invoked`);
    return this.userService.signUp(signUpDto);
  }

  @Post('/signin')
  signIn(@Body() signInDto: SignInDto): Promise<{ accessToken: string }> {
    return this.userService.signIn(signInDto);
  }
}
