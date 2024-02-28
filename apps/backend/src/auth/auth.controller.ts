import { AuthService } from './auth.service';
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { Public } from 'src/decorators/public.decorator';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthDto } from './auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({ type: AuthDto })
  @UseGuards(LocalAuthGuard)
  @Public()
  @Post(`/login`)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
