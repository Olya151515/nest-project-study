import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveBio1729755493999 implements MigrationInterface {
    name = 'RemoveBio1729755493999'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "bio"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "bio" text NOT NULL`);
    }

}
