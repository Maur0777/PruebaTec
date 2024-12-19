import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producto } from 'src/schemas/task.schema';
import { UpdateProductoDto } from 'src/dto/update-producto.dto';
import { CreateProductoDto } from '../dto/create-producto.dto';
@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(Producto.name) private productoModel: Model<Producto>,
  ) {}
  findAll() {
    return this.productoModel.find();
  }
  async findOne(id: string) {
    return this.productoModel.findById(id);
  }
  async create(producto: CreateProductoDto) {
    const newProducto = new this.productoModel(producto);
    return newProducto.save();
  }
  async update(id: string, producto: UpdateProductoDto) {
    return this.productoModel.findByIdAndUpdate(id, producto, { new: true });
  }
  async delete(id: string) {
    return this.productoModel.findByIdAndDelete(id);
  }
}
