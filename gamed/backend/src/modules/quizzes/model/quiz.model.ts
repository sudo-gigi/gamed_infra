import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractBaseEntity } from 'src/entities/base.entity';
import { QuizQuestion } from './quiz-question.model';
import { QuizAttempt } from './quiz-attempt.model';
import { text } from 'stream/consumers';

@Entity('quiz')
export class Quiz extends AbstractBaseEntity {
  @Column()
  title: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ default: false })
  isProficiencyTest: boolean;

  @Column({ default: 20 })
  maxPoints: number;

  @OneToMany(() => QuizQuestion, (question) => question.quiz, { cascade: true })
  questions: QuizQuestion[];

  @OneToMany(() => QuizAttempt, (attempt) => attempt.quiz)
  attempts: QuizAttempt[];

  @Column({ default: 0 })
  passingScore: number;

  @Column({ default: true })
  isRequire: boolean;

  @Column({ nullable: true })
  dueDate: Date;
}
