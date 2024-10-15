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
    return await this.placeModal.find().populate(["createdBy", "state", "city"]);
  }

  findOne(id: number) {
    return `This action returns a #${id} place`;
  }

  update(id: number, updatePlaceDto: UpdatePlaceDto) {
    return `This action updates a #${id} place`;
  }

  remove(id: number) {
    return `This action removes a #${id} place`;
  }
}
