import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { QuizQuestion } from './quiz-question.model';

@Entity('quiz_options')
export class QuizOption {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  optionText: string;

  @Column({ default: false })
  isCorrect: boolean;

  @ManyToOne(() => QuizQuestion, (question) => question.options)
  question: QuizQuestion[];
}
