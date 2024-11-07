import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddBaseTables1730976213300 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
