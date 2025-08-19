import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { Inject } from '@nestjs/common';
import { getQueueToken } from '@nestjs/bullmq';

@Injectable()
export class EmailQueueService {
  constructor(@InjectQueue('email') private readonly emailQueue: Queue) {}

  async addEmailToQueue(
    to: string,
    subject: string,
    text: string,
    html?: string,
  ) {
    const maxRetries = Number(process.env.EMAIL_MAX_RETRIES) || 3;
    const initialDelay = Number(process.env.EMAIL_RETRY_DELAY) || 5000;

    const job = await this.emailQueue.add(
      'sendEmail',
      { to, subject, text, html },
      {
        attempts: maxRetries,
        backoff: {
          type: 'exponential',
          delay: initialDelay,
        },
      },
    );
    return { jobId: job.id };
  }
}
function InjectQueue(queueName: string) {
  return Inject(getQueueToken(queueName));
}
