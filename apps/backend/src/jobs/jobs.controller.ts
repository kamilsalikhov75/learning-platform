import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './create-job.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/users/user.schema';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';

@ApiBearerAuth()
@ApiTags('jobs')
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Public()
  @Get()
  getJobs() {
    return this.jobsService.getJobs();
  }

  @ApiBody({ type: CreateJobDto })
  @Roles([Role.Admin])
  @Post()
  addJob(@Body() createJobDto: CreateJobDto) {
    return this.jobsService.addJob(createJobDto);
  }
}
