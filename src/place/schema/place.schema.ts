import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { City } from 'src/city/schema/city.schema';
import { State } from 'src/state/schema/state.shcema';
import { Users } from 'src/users/schema/users.schema';

export type PlaceDocument = HydratedDocument<Place>;

export interface ITiming {
    startTime: string,
    endTime: string
}

@Schema()
export class Place {
  @Prop({required: true, type: String, unique: true})
  name: string;

  @Prop({required: true, type: String})
  imageUrl: string;

  @Prop({required: true, type: String})
  content: string;

  @Prop({required: true, type: String})
  location: string;

  @Prop({required: true, type: String})
  fee: string;

  @Prop({type: Number})
  viewCount: number;

  @Prop({required: true, type: mongoose.Types.ObjectId, ref: "Users"})
  createdBy: Users;

  @Prop({required: true, type: mongoose.Types.ObjectId, ref: "City"})
  city: City;

  @Prop({required: true, type: mongoose.Types.ObjectId, ref: "State"})
  state: State;

  @Prop({required: true, type: String})
  timing: string;

}

export const PlaceSchema = SchemaFactory.createForClass(Place);