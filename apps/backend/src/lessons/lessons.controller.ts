import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/users/user.schema';
import { ApiBearerAuth, ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('lessons')
@Roles([Role.Admin])
@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @ApiBody({ type: CreateLessonDto })
  @Post()
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonsService.create(createLessonDto);
  }

  @Roles([Role.Default, Role.Supervisor])
  @ApiParam({ name: 'id', required: true, type: String })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonsService.findOne(id);
  }

  @Roles([Role.Default, Role.Supervisor])
  @ApiParam({ name: 'courseId', required: true, type: String })
  @Get('/course/:courseId')
  findByCourse(@Param('courseId') courseId: string) {
    return this.lessonsService.findByCourse(courseId);
  }

  @ApiBody({ type: [UpdateLessonDto] })
  @Patch('orders')
  async updateOrders(@Body('lessons') lessons: UpdateLessonDto[]) {
    return await Promise.all(
      lessons.map(async (lesson) => {
        return await this.lessonsService.update(lesson._id, {
          order: lesson.order,
        });
      }),
    );
  }

  @ApiParam({ name: 'id', required: true, type: String })
  @ApiBody({ type: UpdateLessonDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLessonDto: UpdateLessonDto) {
    const { _id, ...lessonInfo } = updateLessonDto;
    return this.lessonsService.update(id, lessonInfo);
  }

  @ApiParam({ name: 'id', required: true, type: String })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonsService.remove(id);
  }
}
