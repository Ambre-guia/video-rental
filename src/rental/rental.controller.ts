import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { RentalService } from './rental.service';
import { CreateRentalDto } from '../dto/create-rental.dto';
import { Rental } from './rental.entity';

@Controller('rentals')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Post()
  async create(@Body() createRentalDto: CreateRentalDto): Promise<Rental> {
    return await this.rentalService.create(createRentalDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Rental> {
    return await this.rentalService.findOne(id);
  }

  @Get()
  async findAll(): Promise<Rental[]> {
    return await this.rentalService.findAll();
  }
}
