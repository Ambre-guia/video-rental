import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Customer } from '../customer/customer.entity';
import { Rental } from '../rental/rental.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationService {
  private taskStatus = 'not started';

  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    @InjectRepository(Rental)
    private rentalRepository: Repository<Rental>,
  ) {}

  // Tâche planifiée pour envoyer un rappel à J-5
  @Cron(CronExpression.EVERY_DAY_AT_NOON)
  async sendReminder5DaysBefore() {
    const rentals = await this.rentalRepository.find({
      where: {
        returnDate: this.getDateIn5Days(),
      },
      relations: ['customer'],
    });
    rentals.forEach((rental) => {
      this.sendEmail(rental.customer, 'Rappel: Retour dans 5 jours');
    });
  }

  // Tâche planifiée pour envoyer un rappel à J-3
  @Cron(CronExpression.EVERY_DAY_AT_NOON)
  async sendReminder3DaysBefore() {
    const rentals = await this.rentalRepository.find({
      where: {
        returnDate: this.getDateIn3Days(),
      },
      relations: ['customer'],
    });
    rentals.forEach((rental) => {
      this.sendEmail(rental.customer, 'Rappel: Retour dans 3 jours');
    });
  }

  // Fonction utilitaire pour obtenir la date dans 5 jours
  getDateIn5Days() {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date;
  }

  // Fonction utilitaire pour obtenir la date dans 3 jours
  getDateIn3Days() {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
  }

  // Simuler l'envoi d'email
  sendEmail(customer: Customer, message: string) {
    console.log(
      `Envoi de l'email à ${customer.first_name} ${customer.last_name}: ${message}`,
    );
  }

  async listScheduledTasks() {
    // Retourner la liste des tâches planifiées
    return [
      { name: 'Rappel à J-5', schedule: 'Tous les jours à midi' },
      { name: 'Rappel à J-3', schedule: 'Tous les jours à midi' },
    ];
  }

  async triggerTask() {
    // Simuler le lancement d'une tâche manuellement
    this.taskStatus = 'running';
    return 'Tâche planifiée lancée manuellement';
  }

  async getTaskStatus() {
    // Vérifier le statut d'une tâche
    return `Statut de la tâche : ${this.taskStatus}`;
  }
}
