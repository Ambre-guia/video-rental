import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rental } from './rental.entity';
import { CreateRentalDto } from '../dto/create-rental.dto';
import { Customer } from '../customer/customer.entity';

@Injectable()
export class RentalService {
  constructor(
    @InjectRepository(Rental)
    private rentalRepository: Repository<Rental>,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(createRentalDto: CreateRentalDto): Promise<Rental> {
    const customer = await this.customerRepository.findOne({
      where: { customer_id: createRentalDto.customerId },
    });
    const rental = new Rental();
    rental.startDate = new Date(createRentalDto.startDate);
    rental.returnDate = new Date(createRentalDto.returnDate);
    rental.customer = customer;

    return await this.rentalRepository.save(rental);
  }

  async findOne(id: number): Promise<Rental> {
    return await this.rentalRepository.findOne({
      where: { id },
      relations: ['customer'],
    });
  }

  async findAll(): Promise<Rental[]> {
    return await this.rentalRepository.find({ relations: ['customer'] });
  }
}
