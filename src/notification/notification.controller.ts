import { Controller, Get, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  async findAll() {
    // Lister toutes les tâches planifiées
    return await this.notificationService.listScheduledTasks();
  }

  @Post('trigger')
  async triggerTask() {
    // Lancer une tâche planifiée manuellement
    return await this.notificationService.triggerTask();
  }

  @Get('status')
  async getTaskStatus() {
    // Vérifier l'état d'exécution d'une tâche planifiée
    return await this.notificationService.getTaskStatus();
  }
}
