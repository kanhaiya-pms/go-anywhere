import { Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { InjectModel } from '@nestjs/mongoose';
import { State } from './schema/state.shcema';
import { Model } from 'mongoose';
import { IAuth } from 'utils/common.interface';

@Injectable()
export class StateService {
  constructor(@InjectModel(State.name) private readonly stateModal: Model<State>){}
  async create(createStateDto: CreateStateDto, auth: IAuth) {
    return await this.stateModal.create({
      ...createStateDto,
      CreatedBy: auth.sub
    });
  }

 async findAll() {
    return await this.stateModal.find();
  }

  async findOne(id: string) {
    return await this.stateModal.findById(id);
  }

  async update(id: string, updatePlaceDto: UpdateStateDto) {
    return await this.stateModal.findByIdAndUpdate(id,updatePlaceDto, {lean: true});
  }

  async remove(id: string) {
    return await this.stateModal.findByIdAndDelete(id);
  }
}
