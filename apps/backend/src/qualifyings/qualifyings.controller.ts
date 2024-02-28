import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QualifyingsService } from './qualifyings.service';
import { CreateQualifyingDto } from './dto/create-qualifying.dto';
import { UpdateQualifyingDto } from './dto/update-qualifying.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/users/user.schema';
import { ApiBearerAuth, ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('qualifyings')
@Roles([Role.Admin, Role.Supervisor])
@Controller('qualifyings')
export class QualifyingsController {
  constructor(private readonly qualifyingsService: QualifyingsService) {}

  @ApiBody({ type: CreateQualifyingDto })
  @Post()
  create(@Body() createQualifyingDto: CreateQualifyingDto) {
    return this.qualifyingsService.create(createQualifyingDto);
  }

  @ApiParam({ name: 'id', required: true, type: String })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.qualifyingsService.findOne(id);
  }

  @ApiParam({ name: 'id', required: true, type: String })
  @ApiBody({ type: UpdateQualifyingDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQualifyingDto: UpdateQualifyingDto,
  ) {
    return this.qualifyingsService.update(id, updateQualifyingDto);
  }

  @ApiParam({ name: 'id', required: true, type: String })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qualifyingsService.remove(id);
  }
}
