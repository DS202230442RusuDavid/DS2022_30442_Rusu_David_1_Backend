import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './user.service';
import CreateUserDto from './dto/createUser.dto';
import JwtAuthenticationGuard from '../authentification/jwt-authentication.guard';
 
@Controller('posts')
export default class UserController {
  constructor(
    private readonly userService: UsersService
  ) {}
 
//   @Post()
//   @UseGuards(JwtAuthenticationGuard)
//   async createPost(@Body() post: CreateUserDto) {
//     // return this.postsService.createPost(post);
//   }

}
