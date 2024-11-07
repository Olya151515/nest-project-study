"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process = require("node:process");
const dotenv = require("dotenv");
const path = require("path");
const typeorm_1 = require("typeorm");
const configuration_1 = require("./src/configs/configuration");
dotenv.config();
const config = (0, configuration_1.default)().database;
console.log(path.join(process.cwd(), 'src', 'database', 'entities', '*.entity.ts'));
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: config.host,
    port: config.port,
    username: config.user,
    password: config.password,
    database: config.name,
    entities: [
        path.join(process.cwd(), 'src', 'database', 'entities', '*.entity.ts'),
    ],
    migrations: [
        path.join(process.cwd(), 'src', 'database', 'migrations', '*.ts'),
    ],
    synchronize: false,
});
//# sourceMappingURL=ormconfig.js.map