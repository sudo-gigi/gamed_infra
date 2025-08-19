import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { EmailQueueService } from './email-queue.service';
import { EmailProcessor } from './email.processor';
import { MailService } from './email.service';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: 'email',
      useFactory: () => ({
        connection: {
          host: process.env.REDIS_HOST || '127.0.0.1',
          port: Number(process.env.REDIS_PORT) || 6379,
        },
      }),
    }),
  ],
  providers: [EmailQueueService, EmailProcessor, MailService],
  exports: [EmailQueueService, MailService],
})
export class MailModule {}
