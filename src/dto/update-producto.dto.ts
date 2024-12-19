import { IsOptional, IsString } from 'class-validator';
export class UpdateProductoDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  price?: number;
}
