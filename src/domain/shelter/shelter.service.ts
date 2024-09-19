import { Injectable } from '@nestjs/common';
import { ShelterInfoRepository } from './shelter_info.repository';
import { ShelterChecklistAnswerRepository } from './shelter_checklist_answer.repository';
import { ShelterChecklistQuestionRepository } from './shelter_checklist_question.repository';
import { ShelterChecklistQuestion } from 'src/entity/shelter_checklist_question.entity';
import { AnswerDto } from './dto/answer.dto';
import { User } from 'src/entity/user.entity';
import { ShelterInfo } from 'src/entity/shelter_info.entity';
import { AnswerArrayDto } from './dto/answer_array.dto';
import { ShelterCodeDto } from './dto/shelter_ids.dto';

@Injectable()
export class ShelterService {
  constructor(
    private shelterInfoRepository: ShelterInfoRepository,
    private shelterChecklistAnswerRepository: ShelterChecklistAnswerRepository,
    private shelterChecklistQuestionRepository: ShelterChecklistQuestionRepository,
  ) {}

  /// Info
  async getShelterInfo(shelterCodeDto: ShelterCodeDto): Promise<ShelterInfo> {
    const { c1, c2 } = shelterCodeDto;
    return await this.shelterInfoRepository.findOne({
      where: { shelter_code1: c1, shelter_code2: c2 },
    });
  }

  /// Answer
  async getReviews(shelterCodeDto: ShelterCodeDto) {
    const shelterInfo = await this.getShelterInfo(shelterCodeDto);

    return this.shelterChecklistAnswerRepository.find({
      where: { shelterInfo },
      select: {
        user: {
          user_id: true,
          username: true,
        },
      },
      order: {
        user: {
          user_id: 'ASC',
        },
        a_id: 'ASC',
      },
      relations: {
        user: true,
      },
    });
  }

  // async createShelterChecklistAnswer(answerDto: AnswerDto, user: User) {
  //   const { q_id, score, shelter_info_id } = answerDto;

  //   const shelterChecklistQuestion =
  //     await this.getShelterChecklistQuestion(q_id);
  //   const shelterInfo = await this.getShelterInfo(shelter_info_id);

  //   const answer = this.shelterChecklistAnswerRepository.create({
  //     user,
  //     score,
  //     shelterInfo,
  //     shelterChecklistQuestion,
  //   });

  //   return await this.shelterChecklistAnswerRepository.save(answer);
  // }

  async createShelterChecklistAnswers(
    answerArrayDto: AnswerArrayDto,
    shelterCodeDto: ShelterCodeDto,
    user: User,
  ) {
    let answers = [];
    const shelterInfo = await this.getShelterInfo(shelterCodeDto);

    for (let i = 0; i < answerArrayDto.answers.length; i++) {
      const { q_id, score } = answerArrayDto.answers[i];

      const shelterChecklistQuestion =
        await this.getShelterChecklistQuestion(q_id);

      const answer = this.shelterChecklistAnswerRepository.create({
        user,
        score,
        shelterInfo,
        shelterChecklistQuestion,
      });

      answers.push(answer);
    }

    return await this.shelterChecklistAnswerRepository.save(answers);
  }

  /// Question
  // 하나의 장르로만 하고 싶은데...
  async getShelterChecklistQuestion(
    id: number,
  ): Promise<ShelterChecklistQuestion> {
    return await this.shelterChecklistQuestionRepository.findOne({
      where: { q_id: id },
    });
  }
}
