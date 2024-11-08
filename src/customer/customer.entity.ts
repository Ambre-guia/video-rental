import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Rental } from '../rental/rental.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  timezone: string; // Nouveau champ pour le fuseau horaire du client

  @OneToMany(() => Rental, (rental) => rental.customer)
  rentals: Rental[];
}
