import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentalController } from './rental.controller';
import { RentalService } from './rental.service';
import { Rental } from './rental.entity';
import { Customer } from '../customer/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rental, Customer])],
  controllers: [RentalController],
  providers: [RentalService],
})
export class RentalModule {}
