import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private readonly OrderService: OrderService) {}

  @Post()
  createOrder(): string {
    return this.OrderService.getOrder();
  }
  
  @Put()
  updateOrder(): string {
    return this.OrderService.getOrder();
  }

  @Get()
  removeOrder(): string {
    return this.OrderService.getOrder();
  }

  @Delete()
  deleteOrder(): string {
    return this.OrderService.getOrder();
  }
}
