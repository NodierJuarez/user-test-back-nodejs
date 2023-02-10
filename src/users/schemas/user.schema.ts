import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  fullName: string;
  @Prop()
  birthday: string;
  @Prop()
  email: string;
  @Prop()
  phone: number;
  @Prop()
  ext: string;
  @Prop()
  signature: string;
}

export const UserSchema = SchemaFactory.createForClass(User);