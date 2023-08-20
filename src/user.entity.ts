import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //entity decorator is used to define that this class is a entity
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
