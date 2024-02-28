import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Put,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { Public } from 'src/decorators/public.decorator';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from './user.schema';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBearerAuth()
  @Get('me')
  getMe(@Request() { user }) {
    return user;
  }

  @ApiBearerAuth()
  @Roles([Role.Admin, Role.Supervisor])
  @Get('')
  findAll() {
    return this.usersService.findAll();
  }

  @ApiBearerAuth()
  @Roles([Role.Admin, Role.Supervisor])
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @ApiBearerAuth()
  @ApiBody({ type: UpdateUserDto })
  @Put('me')
  updateMe(@Request() { user }, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(user._id, updateUserDto);
  }

  @ApiBody({ type: CreateUserDto })
  @Public()
  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.registerUser(createUserDto);
  }
}
