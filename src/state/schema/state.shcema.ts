import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { City } from 'src/city/schema/city.schema';
import { Users } from 'src/users/schema/users.schema';

export type StateDocument = HydratedDocument<State>;

@Schema()
export class State {
  @Prop({required: true, type: String, unique: true})
  name: string;

  @Prop({required: true, type: String})
  imageUrl: string;

  @Prop({required: true, type: String})
  location: string;

  @Prop({type: Number, default: 0})
  viewCount: number;

  @Prop({required: true, type: mongoose.Types.ObjectId, ref: "Users"})
  CreatedBy: Users;
}

export const StateSchema = SchemaFactory.createForClass(State);