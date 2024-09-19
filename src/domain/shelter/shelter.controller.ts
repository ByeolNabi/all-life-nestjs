import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ShelterService } from './shelter.service';
import { AnswerDto } from './dto/answer.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../user/get-user.decorator';
import { User } from 'src/entity/user.entity';
import { AnswerArrayDto } from './dto/answer_array.dto';
import { ShelterCodeDto } from './dto/shelter_ids.dto';

@Controller('shelter')
export class ShelterController {
  constructor(private shelterService: ShelterService) {}

  private logger = new Logger('ShelterController');

  /// question
  @Get('/q/:id') //질문 리스트 가져오기
  getShelterChecklistQuestion(@Param('id') id: number) {
    return this.shelterService.getShelterChecklistQuestion(id);
  }

  /// answer
  @Get('/a') // 리뷰 모두 가져오기
  getReviews(@Query() shelterCodeDto: ShelterCodeDto) {
    return this.shelterService.getReviews(shelterCodeDto);
  }

  // @Post('/a') // 답변 하나만 넣기
  // @UseGuards(AuthGuard())
  // createAnswer(@Body() answerDto: AnswerDto, @GetUser() user: User) {
  //   return this.shelterService.createShelterChecklistAnswer(answerDto, user);
  // }

  @Post('/as') // 전체 답변 넣기
  @UseGuards(AuthGuard())
  createAnswers(
    @Body() answerArrayDto: AnswerArrayDto,
    @GetUser() user: User,
    @Param() shelterCodeDto: ShelterCodeDto,
  ) {
    return this.shelterService.createShelterChecklistAnswers(
      answerArrayDto,
      shelterCodeDto,
      user,
    );
  }

  /// score
  @Get('/score')
  getShelterScore(@Query() shelterCodeDto: ShelterCodeDto) {
    return this.shelterService.getShelterInfo(shelterCodeDto);
  }
}
