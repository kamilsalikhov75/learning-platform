import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { HydratedDocument } from 'mongoose';

export type QualifyingDocument = HydratedDocument<Qualifying>;

@Schema()
export class Qualifying {
  @ApiProperty()
  @Prop({ required: true })
  title: string;
}

export const QualifyingSchema = SchemaFactory.createForClass(Qualifying);
