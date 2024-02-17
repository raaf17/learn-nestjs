import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})

export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateCustomerMiddleware)
      .exclude(
        { path: 'api/customers/', method: RequestMethod.GET },
        { path: 'api/customers/create', method: RequestMethod.POST },
        'customers/(.*)',
      )
      .forRoutes(CustomersController);
  }
}