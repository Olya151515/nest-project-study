import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { UserID } from '../../../common/types/entity-ids.type';
import { Config } from '../../../configs/config-type';
import { IUserData } from '../../auth/models/interfaces/user-data.interface';
import { ArticleRepository } from '../../repository/services/article.repository';
import { UserRepository } from '../../repository/services/user.repository';
import { UpdateUserReqDto } from '../models/dto/req/update-user.req.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly configService: ConfigService<Config>,
    private userRepository: UserRepository,
    private articleRepository: ArticleRepository,
  ) {}

  public async findMe(userData: IUserData) {
    return `This action returns a #${userData.email} user`;
  }
  public async updateMe(userData: IUserData, dto: UpdateUserReqDto) {
    return `This action updates a #${userData.email} user`;
  }

  public async removeMe(userData: IUserData) {
    return `This action removes a #${userData.email} user`;
  }

  public async findOne(id: UserID) {
    return `This action returns a #${id} user`;
  }
}
