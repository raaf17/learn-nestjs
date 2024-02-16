import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findCustomers(){
    return {
      id: 1,
      name: 'Kipli',
      email: 'kipli@gmail.com',
      createdAt: new Date(),
    }
  }
}
