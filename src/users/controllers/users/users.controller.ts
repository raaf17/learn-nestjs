import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, UseInterceptors } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializeUser } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER SERVICE') private readonly userService: UsersService) {}

  @Get('')
  getUsers(){
    return this.userService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  getByUsername(@Param('username') username: string) {
    const user = this.userService.getUserByUsername(username);
    if (user) return new SerializeUser(user);
    else throw new HttpException('User tidak ditemukan', HttpStatus.BAD_REQUEST);
  }
}
