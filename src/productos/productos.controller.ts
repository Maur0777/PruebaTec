import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from '../dto/create-producto.dto';
import { UpdateProductoDto } from '../dto/update-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private productoService: ProductosService) {}
  @Get()
  findAll() {
    return this.productoService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.productoService.findOne(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }
  @Post()
  async create(@Body() body: CreateProductoDto) {
    try {
      return await this.productoService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Task already exists');
      }
      throw error;
    }
  }
  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const task = await this.productoService.delete(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateProductoDto) {
    const task = await this.productoService.update(id, body);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }
}
