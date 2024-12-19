import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/carritodb'),
    ProductosModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
