import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1745860844114 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "users" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "email" varchar UNIQUE NOT NULL,
        "password" varchar NOT NULL,
        "username" varchar NOT NULL,
        "total_points" integer DEFAULT 0,
        "created_at" timestamp NOT NULL DEFAULT now(),
        "updated_at" timestamp NOT NULL DEFAULT now(),
        "is_email_verified" BOOLEAN NOT NULL DEFAULT false,
        "auth_provider" VARCHAR NOT NULL DEFAULT 'local'
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS users`);
  }
}
