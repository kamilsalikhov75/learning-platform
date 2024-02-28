import { ApiProperty } from '@nestjs/swagger';

export class UpdateQuestionDto {
  @ApiProperty()
  title?: string;

  @ApiProperty()
  options?: string[];

  @ApiProperty()
  answer?: string;
}
