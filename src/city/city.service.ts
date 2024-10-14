import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectModel } from '@nestjs/mongoose';
import { City } from './schema/city.schema';
import { Model } from 'mongoose';
import { IAuth } from 'utils/common.interface';

@Injectable()
export class CityService {
  constructor(@InjectModel(City.name) private readonly cityModal: Model<City>){}

  async create(createCityDto: CreateCityDto, auth: IAuth) {
    return await this.cityModal.create({
      ...createCityDto,
      CreatedBy: auth.sub
    });
  }

  async findAll() {
    return await this.cityModal.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
