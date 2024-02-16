import { CustomersService } from './../../services/customers/customers.service';
import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) { }
  @Get('')
  getCustomer() {
    return this.customersService.findCustomers()
  }
}
