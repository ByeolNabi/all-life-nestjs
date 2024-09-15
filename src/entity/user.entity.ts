import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { UserTypeEnum } from './enum/userType.enum';
import { Language } from './language.entity';
import { ShelterChecklistAnswer } from './shelter_checklist_answer.entity';

@Entity()
@Unique(['user_id'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  user_id: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  term: boolean;

  @Column()
  type: UserTypeEnum;

  @ManyToOne((type) => Language, (language) => language.user, { eager: true }) // 유저정보 > 언어 테이블
  language: Language;

  @OneToMany(
    (type) => ShelterChecklistAnswer,
    (shelterChecklistAnswer) => shelterChecklistAnswer.user,
    { eager: false },
  ) // 유저정보 < 점검 답변
  shelterChecklistAnswer: ShelterChecklistAnswer;
}
