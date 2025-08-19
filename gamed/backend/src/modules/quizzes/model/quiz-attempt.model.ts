import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AbstractBaseEntity } from 'src/entities/base.entity';
import { User } from 'src/modules/user/model/user.model';
import { Quiz } from './quiz.model';
import { QuizAnswer } from './quiz-answer.model';

@Entity('quiz_attempt')
export class QuizAttempt extends AbstractBaseEntity {
  // @ManyToOne(() => User, (user) => user.quizattempts)
  // user: User;

  @ManyToOne(() => Quiz, (quiz) => quiz.attempts)
  quiz: Quiz;

  @OneToMany(() => QuizAnswer, (answer) => answer.attempt, { cascade: true })
  answers: QuizAnswer[];

  @Column({ default: 0 })
  score: number;

  @Column({ default: 0 })
  earnedPoints: number;

  @Column({ default: false })
  isPassed: boolean;

  @Column({ nullable: true })
  completedAt: Date;
}
