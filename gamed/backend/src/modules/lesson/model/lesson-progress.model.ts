import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractBaseEntity } from 'src/entities/base.entity';
import { User } from 'src/modules/user/model/user.model';
import { Lesson } from './lesson.model';

@Entity('lesson_progress')
export class lessonProgress extends AbstractBaseEntity {
  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Lesson, (lesson) => lesson.progress)
  lesson: Lesson;

  @Column({ default: false })
  isCompleted: boolean;

  @Column({ default: 0 })
  timeSpentMinutes: number;

  @Column({ nullable: true })
  completedAt: Date;
}
