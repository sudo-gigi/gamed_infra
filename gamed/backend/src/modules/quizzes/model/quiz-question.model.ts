import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AbstractBaseEntity } from 'src/entities/base.entity';
import { Quiz } from './quiz.model';
import { QuizOption } from './quiz-option.model';
import { QuestionType } from '../type/quiz.type';

@Entity('quiz_question')
export class QuizQuestion {
  @PrimaryGeneratedColumn('uuid')
  is: string;

  @Column('text')
  questionText: string;

  @Column({
    type: 'enum',
    enum: QuestionType,
    default: QuestionType.SINGLE_CHOICE,
  })
  type: QuestionType;

  @Column({ default: 1 })
  points: number;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;

  @OneToMany(() => QuizOption, (option) => option.question, { cascade: true })
  options: QuizOption[];
}
