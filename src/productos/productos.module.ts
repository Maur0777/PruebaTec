import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoSchema } from 'src/schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Producto', schema: ProductoSchema }]),
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
