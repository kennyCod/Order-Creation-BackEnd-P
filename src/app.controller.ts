import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getOrder(): string {
    return this.appService.getHello();
  }

  @Post()
  postOrder(): string {
    return this.appService.getHello();
  }

  @Put()
  putOrder(): string {
    return this.appService.getHello();
  }

  @Delete()
  deleteOrder(): string {
    return this.appService.getHello();
  }
}
