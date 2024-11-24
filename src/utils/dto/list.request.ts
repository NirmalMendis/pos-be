import { Transform, Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export enum OrderDirection {
  DESC = 'DESC',
  ASC = 'ASC',
}

export class ListRequestDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  page: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pageSize: number;

  @IsString()
  @IsOptional()
  orderBy: string;

  @IsString()
  @IsOptional()
  orderDirection: OrderDirection;
}
