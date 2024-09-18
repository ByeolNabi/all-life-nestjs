import { Injectable } from '@nestjs/common';
import { ShelterInfoRepository } from './shelter_info.repository';
import { ShelterChecklistAnswerRepository } from './shelter_checklist_answer.repository';
import { ShelterChecklistQuestionRepository } from './shelter_checklist_question.repository';
import { ShelterChecklistQuestion } from 'src/entity/shelter_checklist_question.entity';
import { AnswerDto } from './dto/answer.dto';
import { User } from 'src/entity/user.entity';
import { ShelterInfo } from 'src/entity/shelter_info.entity';
import { AnswerArrayDto } from './dto/answer_array.dto';

@Injectable()
export class ShelterService {
  constructor(
    private shelterInfoRepository: ShelterInfoRepository,
    private shelterChecklistAnswerRepository: ShelterChecklistAnswerRepository,
    private shelterChecklistQuestionRepository: ShelterChecklistQuestionRepository,
  ) {}

  /// Info
  
  async getShelterInfo(id: number): Promise<ShelterInfo> {
    return await this.shelterInfoRepository.findOne({
      where: { shelter_info_id: id },
    });
  }

  /// Answer
  async createShelterChecklistAnswer(answerDto: AnswerDto, user: User) {
    const { q_id, score, shelter_info_id } = answerDto;

    const shelterChecklistQuestion =
      await this.getShelterChecklistQuestion(q_id);
    const shelterInfo = await this.getShelterInfo(shelter_info_id);

    const answer = this.shelterChecklistAnswerRepository.create({
      user,
      score,
      shelterInfo,
      shelterChecklistQuestion,
    });

    return await this.shelterChecklistAnswerRepository.save(answer);
  }

  async createShelterChecklistAnswers(
    answerArrayDto: AnswerArrayDto,
    user: User,
  ) {
    let answers = [];

    for (let i = 0; i < answerArrayDto.answers.length; i++) {
      const { q_id, score, shelter_info_id } = answerArrayDto.answers[i];

      const shelterChecklistQuestion =
        await this.getShelterChecklistQuestion(q_id);
      const shelterInfo = await this.getShelterInfo(shelter_info_id);

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
