import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Producto {
  @Prop({
    trim: true, // quita los espacios en blanco
  })
  name: string;

  @Prop({
    trim: true,
  })
  description: string;

  @Prop({
    default: false,
    trim: true,
  })
  price: number;
}
export const ProductoSchema = SchemaFactory.createForClass(Producto);
