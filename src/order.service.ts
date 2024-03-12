import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  [x: string]: any;
  getOrder(): string {
    return 'Successful';
  }

  postOrder(): string {
    return 'Successful';
  }
  
  putOrder(): string {
    return 'Successful';
  }

  deleteOrder(): string {
    return 'Successful';
  }
}
