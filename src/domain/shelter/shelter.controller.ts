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
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../user/get-user.decorator';
import { User } from 'src/entity/user.entity';
import { AnswerArrayDto } from './dto/answer_array.dto';
import { ShelterUuidDto } from './dto/shelter_uuid.dto';

@Controller('shelter')
export class ShelterController {
  constructor(private shelterService: ShelterService) {}

  private logger = new Logger('ShelterController');

  /// question
  @Get('/q') //질문 항목 하나 가져오기 (0이면 다 가져옮)
  getShelterChecklistQuestion(@Query() query: { q_id: number }) {
    const { q_id } = query;
    return this.shelterService.getShelterChecklistQuestion(q_id);
  }

  /// answer
  @Get('/a') // shelter_uuid 입력 < 리뷰 모두 가져오기 (사람, 질문 번호 내림차순)
  getReviews(@Query() shelterUuidDto: ShelterUuidDto) {
    return this.shelterService.getReviews(shelterUuidDto);
  }

  @Post('/a') // 전체 답변 넣기
  @UseGuards(AuthGuard())
  createAnswers(
    @Body() answerArrayDto: AnswerArrayDto,
    @GetUser() user: User,
    @Query() shelterUuidDto: ShelterUuidDto,
  ) {
    return this.shelterService.createShelterChecklistAnswers(
      answerArrayDto,
      shelterUuidDto,
      user,
    );
  }

  /// score
  @Get('/score')
  getShelterScore(@Query() shelterUuidDto: ShelterUuidDto) {
    return this.shelterService.getShelterInfo(shelterUuidDto);
  }
}
