import { Schema, SchemaFactory, Prop, raw } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document } from 'mongoose';
import { Course } from 'src/courses/course.schema';
import { Job } from 'src/jobs/job.schema';
import { Lesson } from 'src/lessons/lesson.schema';
import { Qualifying } from 'src/qualifyings/qualifying.schema';
import { Question } from 'src/questions/question.schema';
import { Test } from 'src/tests/test.schema';

export enum Role {
  Default = 'default',
  Admin = 'admin',
  Supervisor = 'supervisor',
}

export enum Sex {
  Male = 'male',
  Female = 'female',
}

export type UserDocument = User & Document;

@Schema({ _id: false })
export class Answer {
  @ApiProperty()
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true,
  })
  question: Question;

  @ApiProperty()
  @Prop({ required: true })
  answer: string;
}

@Schema({ _id: false })
export class FinishedTest {
  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true })
  test: Test;

  @ApiProperty()
  @Prop()
  correctAnswersCount: number;

  @ApiProperty({ type: [Answer] })
  @Prop({
    type: [Answer],
    required: true,
  })
  answers: [Answer];
}

@Schema()
export class User {
  @ApiProperty()
  @Prop({
    required: true,
  })
  firstName: string;

  @ApiProperty()
  @Prop({
    required: true,
  })
  lastName: string;

  @ApiProperty()
  @Prop({
    required: true,
  })
  surName: string;

  @ApiProperty()
  @Prop({
    required: true,
    unique: true,
  })
  phone: string;

  @ApiProperty()
  @Prop({
    required: true,
  })
  password: string;

  @ApiProperty({ type: [Lesson] })
  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Lesson',
    required: true,
  })
  finishedLessons: Lesson[];

  @ApiProperty({ type: [FinishedTest] })
  @Prop({
    type: [FinishedTest],
    required: true,
  })
  finishedTests: [FinishedTest];

  @ApiProperty()
  @Prop()
  role: Role;

  @ApiProperty()
  @Prop({
    required: true,
  })
  sex: Sex;

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true })
  job: Job;

  @ApiProperty()
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Qualifying',
  })
  qualifying: Qualifying;
}

export const UserSchema = SchemaFactory.createForClass(User);
