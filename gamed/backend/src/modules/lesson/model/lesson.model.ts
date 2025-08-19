import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { AbstractBaseEntity } from 'src/entities/base.entity';
import { Course } from 'src/modules/course/model/course.model';
import { Quiz } from 'src/modules/quizzes/model/quiz.model';
import { lessonProgress } from './lesson-progress.model';

@Entity('lessons')
export class Lesson extends AbstractBaseEntity {
  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column()
  order: number;

  @ManyToOne(() => Course, (course) => course.lesson)
  course: Course;

  @OneToOne(() => Quiz, { nullable: true })
  @JoinColumn()
  quiz: Quiz;

  @OneToMany(() => lessonProgress, (progress) => progress.lesson)
  progress: lessonProgress[];

  @Column({ default: 10 })
  completionPoints: number;

  @Column({ default: 0 })
  estimatedTimeMinutes: number;
}
