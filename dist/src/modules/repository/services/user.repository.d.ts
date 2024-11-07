import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../../../database/entities/user.entity';
export declare class UserRepository extends Repository<UserEntity> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
}
