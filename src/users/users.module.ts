import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './schema/users.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "secret",
      signOptions: { expiresIn: '7d' },
    }),
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
