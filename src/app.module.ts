import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { PlaceModule } from './place/place.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ".env"
  }),
  MongooseModule.forRoot(process.env.DB_URI),
  UsersModule,
  StateModule,
  CityModule,
  PlaceModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
