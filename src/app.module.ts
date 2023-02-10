import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

console.log("MONGOURL", process.env.MONGODB_URL);
@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    MongooseModule.forRoot("mongodb+srv://nodier21:Hillsong21@cluster0.auztufk.mongodb.net/?retryWrites=true&w=majority")
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
