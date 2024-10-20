import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotIn,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  Min,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

import { TransformerHelper } from '../../../../../common/helpers/transformer.helper';
import { GenderEnum } from '../../enums/gender.enum';

export class CarBaseReqDto {
  @Transform(TransformerHelper.trim)
  @IsString()
  @Length(3, 50)
  producer: string;

  @Transform(TransformerHelper.trim)
  @IsString()
  @Length(3, 50)
  model: string;

  @Type(() => Number) //переводить все в число
  @IsInt()
  @Min(1900)
  year: number;
}
export class UserBaseReqDto {
  @Transform(TransformerHelper.trim)
  @Transform(TransformerHelper.setLowerCase)
  @IsString()
  @Length(3, 50)
  name: string;

  @Type(() => Number) //переводить все в число
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(150)
  age: number;

  @Transform(TransformerHelper.trim)
  @Transform(TransformerHelper.setLowerCase)
  @ApiProperty({ example: 'string@gmail.com' })
  @IsString()
  @ValidateIf((obj) => !obj.phone) //валідуємо email якщо phone відсутній
  @IsEmail()
  email: string;

  @Transform(TransformerHelper.trim)
  @ValidateIf((obj) => !obj.email) //валідуємо phone якщо email відсутній
  @IsString()
  phone: string;

  @IsBoolean()
  @IsOptional() //not requeried
  isStudent: boolean = false;

  @Transform(TransformerHelper.trim)
  @ApiProperty({ example: '123qbfnwe' })
  @IsNotIn(['password', '123456', 'qwerty'])
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must contain at least 1 letter, 1 number, and be at least 8 characters long',
  })
  password?: string;

  @IsOptional()
  @IsEnum(GenderEnum)
  gender: GenderEnum;

  @Type(() => CarBaseReqDto) //переведення чогось в якийсь тип
  @IsArray()
  @ValidateNested({ each: true }) //щоб перевіряти кожну car in array
  cars: CarBaseReqDto[];
}
