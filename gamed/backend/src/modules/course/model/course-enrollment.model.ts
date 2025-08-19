import { Entity, ManyToOne, Column } from 'typeorm';
import { AbstractBaseEntity } from 'src/entities/base.entity';
import { User } from 'src/modules/user/model/user.model';
import { Course } from './course.model';

@Entity('courses')
export class CourseEnrollment extends AbstractBaseEntity {
  @ManyToOne(() => Course, (course) => course.enrollments)
  course: Course;

  // @ManyToOne(() => User, (user) => user.enrollments)
  // user: User;

  @Column({ default: false })
  proficiencyTestCompleted: boolean;

  @Column({ nullable: true })
  proficiencyLevel: string;

  @Column({ default: 0 })
  currentLevelIndex: number;

  @Column({ default: 0 })
  completedLessons: number;

  @Column({ default: 0 })
  completedQuizzes: number;

  @Column({ default: 0 })
  earnedPoints: number;

  @Column({ default: 0 })
  progressPercentage: number;
}
