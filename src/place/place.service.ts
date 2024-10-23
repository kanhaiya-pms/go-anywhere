import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { IAuth } from 'utils/common.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Place } from './schema/place.schema';
import { Model } from 'mongoose';

@Injectable()
export class PlaceService {
  constructor(@InjectModel(Place.name) private readonly placeModal: Model<Place>){}

  async create(dto: CreatePlaceDto, auth: IAuth) {
    return await this.placeModal.create({
      ...dto,
      createdBy: auth.sub
    })
  }

 async findAll() {
    const data = await this.placeModal.find().populate(["createdBy", "state", "city"]);
    const count = await this.placeModal.countDocuments()

    return {
      data,
      count
    }
  }

  async findAllByCity(cityId: string) {
    console.log("cityId =>", cityId);
    
    const data = await this.placeModal.find({city: cityId});
    const count = await this.placeModal.countDocuments({city: cityId})

    return {
      data,
      count
    }
  }

 async findOne(id: string) {
    return await this.placeModal.findById(id).populate(["state", "city"]);
  }

 async update(id: string, updatePlaceDto: UpdatePlaceDto) {
    return await this.placeModal.findByIdAndUpdate(id,updatePlaceDto, {lean: true});
  }

  async remove(id: string) {
    return await this.placeModal.findByIdAndDelete(id);
  }
}
