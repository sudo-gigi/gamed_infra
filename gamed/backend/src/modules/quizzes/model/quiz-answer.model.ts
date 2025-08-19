import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AbstractBaseEntity } from 'src/entities/base.entity';
import { QuizQuestion } from './quiz-question.model';
import { QuizAttempt } from './quiz-attempt.model';
import { QuizOption } from './quiz-option.model';

@Entity('quiz_answer')
export class QuizAnswer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => QuizAttempt, (attempt) => attempt.answers)
  attempt: QuizAnswer;

  @ManyToOne(() => QuizQuestion)
  question: QuizQuestion;

  @ManyToMany(() => QuizOption)
  @JoinTable()
  selectedOptions: QuizOption[];

  @Column({ type: 'text', nullable: true })
  textAnswer: string;

  @Column({ default: false })
  isCorrect: boolean;
}
