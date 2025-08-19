import { Entity } from 'typeorm';
import { AbstractBaseEntity } from 'src/entities/base.entity';

@Entity('userbadge')
export class UserBadge extends AbstractBaseEntity {}
