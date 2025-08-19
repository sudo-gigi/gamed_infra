import { Entity, Column, OneToMany } from 'typeorm';
import { AbstractBaseEntity } from 'src/entities/base.entity';
import { CourseEnrollment } from 'src/modules/course/model/course-enrollment.model';
import { QuizAttempt } from 'src/modules/quizzes/model/quiz-attempt.model';

export enum AuthProvider {
  LOCAL = 'local',
  GOOGLE = 'google',
}

@Entity('users')
export class User extends AbstractBaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column({ name: 'is_email_verified', default: false })
  isEmailVerified: boolean;

  @Column({
    type: 'enum',
    enum: AuthProvider,
    default: AuthProvider.LOCAL,
    name: 'auth_provider',
  })
  authProvider: AuthProvider;

  @Column({ name: 'total_points', default: 0 })
  totalPoints: number;
}
