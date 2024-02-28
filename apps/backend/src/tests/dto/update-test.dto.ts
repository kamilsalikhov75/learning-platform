import { ApiProperty } from '@nestjs/swagger';

export class UpdateTestDto {
  @ApiProperty()
  course?: string;

  @ApiProperty()
  questions?: string[];
}
