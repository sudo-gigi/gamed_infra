import { Entity, OneToMany, OneToOne, JoinColumn, Column } from 'typeorm';
import { AbstractBaseEntity } from 'src/entities/base.entity';
import { Lesson } from 'src/modules/lesson/model/lesson.model';
import { Quiz } from 'src/modules/quizzes/model/quiz.model';
import { CourseEnrollment } from './course-enrollment.model';

@Entity('courses')
export class Course extends AbstractBaseEntity {
  @Column()
  title: string;

  @Column('text')
  descripition: string;

  @Column()
  thumbnail: string;

  @OneToMany(() => Lesson, (lesson) => lesson.course)
  lesson: Lesson[];

  @OneToOne(() => Quiz, { nullable: true })
  @JoinColumn()
  proficiencyyTest: Quiz;

  @OneToMany(() => CourseEnrollment, (enrollment) => enrollment.course)
  enrollments: CourseEnrollment[];

  @Column({ default: true })
  isActive: boolean;
}
