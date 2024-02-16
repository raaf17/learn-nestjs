import { Module } from '@nestjs/common';
import { CustomersController } from './customers/controllers/customers/customers.controller';
import { CustomersModule } from './customers/customers.module';
import { CustomersService } from './customers/services/customers/customers.service';

@Module({
  imports: [CustomersModule],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class AppModule {}
