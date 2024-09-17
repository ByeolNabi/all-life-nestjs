import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ShelterService } from './shelter.service';
import { AnswerDto } from './dto/answer.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../user/get-user.decorator';
import { User } from 'src/entity/user.entity';

@Controller('shelter')
export class ShelterController {
  constructor(private shelterService: ShelterService) {}

  /// question
  @Get('/q/:id')
  getShelterChecklistQuestion(@Param('id') id: number) {
    return this.shelterService.getShelterChecklistQuestion(id);
  }

  /// answer
  @Post('/a')
  @UseGuards(AuthGuard())
  createAnswer(@Body() answerDto: AnswerDto, @GetUser() user: User) {
    return this.shelterService.createShelterChecklistAnswer(answerDto, user);
  }

  /// info
  @Get('/:id')
  getShelterInfo(@Param('id') id: number) {
    console.log(id);
    return this.shelterService.getShelterInfo(id);
  }
}
