import { MigrationInterface, QueryRunner } from "typeorm";

export class AddArticletable1730991969476 implements MigrationInterface {
    name = 'AddArticletable1730991969476'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" RENAME COLUMN "bod" TO "body"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" RENAME COLUMN "body" TO "bod"`);
    }

}
