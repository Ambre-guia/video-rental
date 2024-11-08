import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Customer } from './customer/customer.entity';
import { Rental } from './rental/rental.entity';

import { CustomerModule } from './customer/customer.module';
import { RentalModule } from './rental/rental.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Metteze votre identifiant postgre
      password: 'Jason@170421', // Mettez votre mot de passe
      database: 'sakila',
      entities: [Customer, Rental],
      synchronize: false, // Synchroniser les entités avec la DB (utiliser false en production)
    }),
    CustomerModule,
    RentalModule,
    NotificationModule,
  ],
})
export class AppModule {}
