import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserDeletedStatus1730981161605 implements MigrationInterface {
    name = 'AddUserDeletedStatus1730981161605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deleted" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleted"`);
    }

}
