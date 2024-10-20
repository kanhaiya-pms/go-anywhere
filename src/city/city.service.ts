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

  async getCityByState(id: string){
    const data = await this.cityModal.find({state: id})

    return {
      stateCode: 202,
      data
    }
  }

  async findOne(id: string) {
    return (await this.cityModal.findById(id)).populate("state");
  }

  async update(id: string, updatePlaceDto: UpdateCityDto) {
    return await this.cityModal.findByIdAndUpdate(id,updatePlaceDto, {lean: true});
  }

 async remove(id: string) {
    return await this.cityModal.findByIdAndDelete(id);
  }
}
