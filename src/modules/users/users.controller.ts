import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { UserID } from '../../common/types/entity-ids.type';
import { JwtAccessGuard } from '../auth/guards/jwt-access-guard';
import { UpdateUserReqDto } from './models/dto/req/update-user.req.dto';
import { UsersService } from './services/users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAccessGuard)
  @ApiBearerAuth()
  @Get('me')
  public async findMe() {
    return this.usersService.findMe();
  }

  @Get(':id')
  public async findOne(@Param('id') id: UserID) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: UserID,
    @Body() updateUserDto: UpdateUserReqDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: UserID) {
    return this.usersService.remove(id);
  }
}
