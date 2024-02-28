import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Request } from 'express';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Role, UserDocument } from 'src/users/user.schema';
import { JobDocument } from 'src/jobs/job.schema';
import { Roles } from 'src/decorators/roles.decorator';
import { ApiBearerAuth, ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('courses')
@Roles([Role.Admin])
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @ApiBody({ type: CreateCourseDto })
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Roles([Role.Default, Role.Supervisor])
  @Get('my')
  findMyCourses(@Req() req: Request & { user: UserDocument }) {
    const { user } = req;
    const { _id } = user.job as JobDocument;
    const jobId = _id.toString();
    return this.coursesService.findByJob(jobId);
  }

  @Roles([Role.Default, Role.Supervisor])
  @ApiParam({ name: 'id', required: true, type: String })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @ApiParam({ name: 'id', required: true, type: String })
  @ApiBody({ type: UpdateCourseDto })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @ApiParam({ name: 'id', required: true, type: String })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
