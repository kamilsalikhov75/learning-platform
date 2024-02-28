import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Job {
  @ApiProperty()
  @Prop({
    required: true,
    unique: true,
  })
  title: string;
}

export type JobDocument = HydratedDocument<Job>;

export const JobSchema = SchemaFactory.createForClass(Job);
