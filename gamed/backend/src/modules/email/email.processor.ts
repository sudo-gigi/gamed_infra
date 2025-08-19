import { Injectable, Logger } from '@nestjs/common';
import { Worker, Job } from 'bullmq';
import { MailService } from './email.service';

@Injectable()
export class EmailProcessor {
  private readonly logger = new Logger(EmailProcessor.name);

  constructor(private readonly mailService: MailService) {
    this.startWorker();
  }

  private startWorker() {
    new Worker(
      'email',
      async (job: Job) => {
        const { to, subject, text, html } = job.data;

        if (!to || !subject || (!text && !html)) {
          this.logger.error(
            `Invalid email data received: ${JSON.stringify(job.data)}`,
          );
          throw new Error(
            'Invalid email data: `to`, `subject`, and either `text` or `html` are required.',
          );
        }

        try {
          this.logger.log(`Processing email job for: ${to}`);
          const result = await this.mailService.sendMail(
            String(to),
            String(subject),
            String(text),
            html ? String(html) : undefined,
          );
          this.logger.log(
            `Email successfully sent to ${to} with messageId ${result.messageId}`,
          );
          return result;
        } catch (error) {
          this.logger.error(
            `Email job failed for ${to}: ${error.message}`,
            error.stack,
          );
          throw error;
        }
      },
      {
        connection: {
          host: process.env.REDIS_HOST || '127.0.0.1',
          port: Number(process.env.REDIS_PORT) || 6379,
        },
      },
    );
  }
}
