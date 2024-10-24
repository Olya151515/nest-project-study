import { MigrationInterface, QueryRunner } from "typeorm";

export class BaseMigration1729755901999 implements MigrationInterface {
    name = 'BaseMigration1729755901999'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "bio" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "bio"`);
    }

}
