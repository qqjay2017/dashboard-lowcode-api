import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  pageNum: number;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  pageSize: number;
}
