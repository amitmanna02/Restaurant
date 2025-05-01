import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './Dtos/createUser.dto';
import { LogInDto } from './Dtos/login.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('register')
  async register(@Body() createUserDto: createUserDto) {
    return this.userService.register(createUserDto);
  }
  
  @Get('login')
  async logIn(@Body() loginDto: LogInDto) {
    return this.userService.logIn(loginDto.email, loginDto.password);
  }
}
