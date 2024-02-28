import { ApiProperty } from '@nestjs/swagger';

export class UpdateLessonDto {
  @ApiProperty()
  _id?: string;

  @ApiProperty()
  title?: string;

  @ApiProperty()
  html?: string;

  @ApiProperty()
  order?: number;
}
