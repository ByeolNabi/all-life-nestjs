import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShelterChecklistAnswer } from './shelter_checklist_answer.entity';

@Entity()
export class ShelterInfo extends BaseEntity {
  @PrimaryGeneratedColumn()
  shelter_info_id: number;

  @Column()
  score: string;

  @Column()
  shelter_code1: number;
  
  @Column()
  shelter_code2: number;
  
  @OneToMany(
    (type) => ShelterChecklistAnswer,
    (shelterChecklistAnswer) => shelterChecklistAnswer.shelterInfo,
    { eager: false },
  ) // 대피소 정보 < 점검 답변
  shelterChecklistAnswer: ShelterChecklistAnswer[];
}
