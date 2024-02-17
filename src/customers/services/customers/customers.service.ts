import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Kipli',
      email: 'kipli@gmail.com'
    },
    {
      id: 2,
      name: 'Kipliiii',
      email: 'kipli@gmail.com'
    },
    {
      id: 3,
      name: 'Kipliiiiiiii',
      email: 'kipli@gmail.com'
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto){
    this.customers.push(customerDto);
  }

  getCustomers(){
    return this.customers;
  }
}
