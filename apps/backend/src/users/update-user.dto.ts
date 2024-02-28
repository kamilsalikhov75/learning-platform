import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.schema';

export class UpdateUserDto extends User {
  @ApiProperty()
  _id: string;
}
