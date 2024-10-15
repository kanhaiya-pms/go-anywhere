import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schema/users.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private readonly usersModel: Model<Users>,
    private jwtService: JwtService
  ) { }


  async create(createUserDto: CreateUserDto) {
    return await this.usersModel.create(createUserDto);
  }

  async login(dto: LoginUserDto) {
    const user = await this.usersModel.findOne({ email: dto.email })

    if (!user) {
      throw new UnauthorizedException("wrong credentials")
    }

    if (user.password != dto.password) {
      throw new UnauthorizedException("wrong credentials")
    }

    const payload = {
      email: user.email,
      role: user.role,
      sub: user._id
    }

    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }

  async findAll() {
    return await this.usersModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
