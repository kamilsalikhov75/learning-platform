import { ApiProperty } from '@nestjs/swagger';

export class UpdateCourseDto {
  @ApiProperty()
  title?: string;

  @ApiProperty()
  jobs?: string[];

  @ApiProperty()
  test?: string;
}
