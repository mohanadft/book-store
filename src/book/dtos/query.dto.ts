import { Type } from 'class-transformer';
import { IsString, IsOptional, IsDateString, IsNumber } from 'class-validator';

export default class QueryDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  price?: number;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsDateString()
  date?: string;
}
