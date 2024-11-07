"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserDeletedStatus1730981161605 = void 0;
class AddUserDeletedStatus1730981161605 {
    constructor() {
        this.name = 'AddUserDeletedStatus1730981161605';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "deleted" TIMESTAMP`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleted"`);
    }
}
exports.AddUserDeletedStatus1730981161605 = AddUserDeletedStatus1730981161605;
//# sourceMappingURL=1730981161605-add_user_deletedStatus.js.map