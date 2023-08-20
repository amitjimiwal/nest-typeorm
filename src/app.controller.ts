import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FindOneOptions } from 'typeorm';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('all')
  async getAllUsr() {
    return await this.appService.getAll();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return await this.appService.getUserbyId(id);
  }

  @Post('new')
  async createUser(@Body() body) {
    return await this.appService.createUser(body);
  }

  @Post(':id')
  async updateUser(@Param('id') id: string, @Body() body) {
    return this.appService.updateUser(Number(id), body.name);
  }

  @Delete(':id')
  async deleteUSer(@Param('id') id: string) {
    return this.appService.deleteUSer(Number(id));
  }
}
