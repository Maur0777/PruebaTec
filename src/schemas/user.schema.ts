import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    trim: true, // quita los espacios en blanco
  })
  name: string;

  @Prop({
    trim: true,
  })
  correo: string;

  @Prop({
    default: false,
    trim: true,
  })
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
