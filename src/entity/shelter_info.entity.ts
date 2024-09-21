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
  shelter_uuid: string;

  @Column({ default: 0, type: 'float' })
  score: number;

  @OneToMany(
    (type) => ShelterChecklistAnswer,
    (shelterChecklistAnswer) => shelterChecklistAnswer.shelterInfo,
    { eager: false },
  ) // 대피소 정보 < 점검 답변
  shelterChecklistAnswer: ShelterChecklistAnswer[];
}
