import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pet } from './pet.entity';
import { type } from 'os';

@Entity() //entity decorator is used to define that this class is a entity
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany((type) => Pet, (pet) => pet.owner)
  pets: Pet[];
}
