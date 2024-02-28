import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type QuestionDocument = HydratedDocument<Question>;

@Schema()
export class Question {
  @ApiProperty()
  @Prop({ required: true })
  title: string;

  @ApiProperty({ type: [String] })
  @Prop({
    required: true,
  })
  options: string[];

  @ApiProperty()
  @Prop({ required: true })
  answer: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
