import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  getHello(): string {
    return 'Hello World! This Api is Working';
  }
  getAll(): Promise<User[]> {
    return this.userRepository.find(); //Select * from User;
  }
  async getUserbyId(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id }); //select * from user
    //where id=id;
    if (!user) {
      throw new NotFoundException('Cant find the user');
    }
    return user;
  }

  async createUser(user): Promise<User> {
    try {
      const newUser = await this.userRepository.save(user);
      return newUser;
    } catch (error) {
      throw new BadRequestException('Error in adding the user top the db');
    }
  }
  async updateUser(id: number, name: string) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('Cant find the user');
    }
    user.name = name;
    return this.userRepository.save(user);
  }

  async deleteUSer(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('Cant find the user');
    }
    return this.userRepository.remove(user);
  }
}
