import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Rental } from '../rental/rental.entity';
import { Customer } from '../customer/customer.entity';

import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { RentalModule } from '../rental/rental.module';
import { CustomerModule } from '../customer/customer.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rental, Customer]),
    RentalModule,
    CustomerModule,
  ],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
