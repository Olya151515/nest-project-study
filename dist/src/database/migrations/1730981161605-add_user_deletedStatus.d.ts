import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddUserDeletedStatus1730981161605 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
