import { ApiProperty } from '@nestjs/swagger';

export class CreateUserReqDto {
  readonly name: string;
  readonly email: string;
  readonly age: number;
  readonly password?: string;
  readonly role: string;
}
