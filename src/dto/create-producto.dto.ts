import { IsOptional, IsString } from 'class-validator';
export class CreateProductoDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  price?: number;
}
