import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { State } from 'src/state/schema/state.shcema';
import { Users } from 'src/users/schema/users.schema';

export type CityDocument = HydratedDocument<City>;

@Schema()
export class City {
  @Prop({required: true, type: String, unique: true})
  name: string;

  @Prop({required: true, type: String})
  imageUrl: string;

  @Prop({required: true, type: String})
  location: string;

  @Prop({type: Number})
  viewCount: number;

  @Prop({required: true, type: mongoose.Types.ObjectId, ref: "Users"})
  CreatedBy: Users;

  @Prop({required: true, type: mongoose.Types.ObjectId, ref: "State"})
  state: State;
}

export const CitySchema = SchemaFactory.createForClass(City);