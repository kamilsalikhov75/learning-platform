import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { HydratedDocument } from 'mongoose';
import { Question } from 'src/questions/question.schema';

export type TestDocument = HydratedDocument<Test>;

@Schema()
export class Test {
  @ApiProperty()
  @Prop({ required: true })
  course: string;

  @ApiProperty({ type: [String] })
  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Question',
  })
  questions: Question[];
}

export const TestSchema = SchemaFactory.createForClass(Test);
