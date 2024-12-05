import {
  IsString,
  IsOptional,
  IsNumberString,
  IsDateString,
} from 'class-validator';

export class QueryDto {
  @IsNumberString()
  @IsOptional()
  price: number;

  @IsOptional()
  @IsString()
  category: string;

  @IsOptional()
  @IsDateString()
  date: string;
}
