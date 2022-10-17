import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './user.service';
import UpdateUserDto from './dto/updateUser.dto';
import JwtAuthenticationGuard from '../authentification/jwt-authentication.guard';
import { LocalAuthenticationGuard } from '../authentification/local-authentication.guard';
import RoleGuard from 'src/roles/role.guard';
import Role from 'src/roles/role.enum';
import { get } from 'http';

@Controller('user')
export default class UserController {
  constructor(
    private readonly userService: UsersService
  ) {}
 
    @Patch()
    @UseGuards(JwtAuthenticationGuard)
    async update(@Body() userData: UpdateUserDto) {
        return this.userService.update(userData.id, userData);
    }

    @Delete()
    @UseGuards(RoleGuard(Role.Admin))
    async delete(@Body() userData: UpdateUserDto) {
        return this.userService.delete(userData.id);
    }

    @Get(":id")
    @UseGuards(RoleGuard(Role.Admin))
    async findAll(@Param("id") id: number) {
        return this.userService.findAll(id);
    }

    // The create method is found in the authentication module
}
