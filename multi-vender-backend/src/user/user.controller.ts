import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  
 @Get('login')
 async loginUser(@Query() userData:LoginDto,@Res() res:Response){
  const data = await this.userService.login(userData.email,userData.password);

  res.cookie("access_token",data.token.accessToken)
  res.cookie("refresh_token",data.token.RefreshToken)
  res.status(200).json(data)


 }

  @Patch("updated-user")
  update( @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update( updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
  // logout will be from frontend using server action
}
