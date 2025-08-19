import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport';
import * as fs from 'fs';
import * as path from 'path';
import * as handlebars from 'handlebars';

@Injectable()
export class MailService {
  private readonly transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? '',
      port: Number(process.env.SMTP_PORT ?? 587),
      requireTLS: true,
      tls: {
        rejectUnauthorized: false,
      },
      secure: false,
      auth: {
        user: process.env.SMTP_USER ?? '',
        pass: process.env.SMTP_PASS ?? '',
      },
    });
  }

  private renderTemplate(
    templateName: string,
    context: Record<string, any>,
  ): string {
    const templatePath = path.join(
      __dirname,
      '..',
      'views',
      `${templateName}.hbs`,
    );
    const templateSource = fs.readFileSync(templatePath, 'utf8');
    const template = handlebars.compile(templateSource);
    return template(context);
  }

  async sendMailWithTemplate(
    to: string,
    subject: string,
    templateName: string,
    context: Record<string, any>,
  ): Promise<{ messageId: string }> {
    try {
      const html = this.renderTemplate(templateName, context);

      const info: SentMessageInfo = await this.transporter.sendMail({
        from: `"No Reply" <${process.env.SMTP_FROM ?? ''}>`,
        to,
        subject,
        html,
      });

      return { messageId: info.messageId };
    } catch (error) {
      throw new Error(`Email sending failed: ${error.message}`);
    }
  }

  async sendMail(
    to: string,
    subject: string,
    text: string,
    html?: string,
  ): Promise<{ messageId: string }> {
    try {
      const info: SentMessageInfo = await this.transporter.sendMail({
        from: `"No Reply" <${process.env.SMTP_FROM ?? ''}>`,
        to,
        subject,
        text,
        html,
      });

      return { messageId: info.messageId };
    } catch (error) {
      throw new Error(`Email sending failed: ${error.message}`);
    }
  }
}
