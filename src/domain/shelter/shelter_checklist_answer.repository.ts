import { Injectable } from '@nestjs/common';
import { ShelterChecklistAnswer } from 'src/entity/shelter_checklist_answer.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
class ShelterChecklistAnswerRepository extends Repository<ShelterChecklistAnswerRepository> {
  constructor(private dataSource: DataSource) {
    super(ShelterChecklistAnswer, dataSource.createEntityManager());
  }
}
