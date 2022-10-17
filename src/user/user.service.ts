import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from '../db/entities/user.entity';
import CreateUserDto from './dto/createUser.dto';
import UpdateUserDto from './dto/updateUser.dto';
 
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}
 
  async findAll(id: number) {
    return await this.usersRepository.find({where:{id}});
  }

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne({where:{email}});
    if (user) {
      return user;
    }
    throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
  }
 
  async getById(id: number) {
    const user = await this.usersRepository.findOne({where:{id}});
    if (user) {
      return user;
    }
    throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND);
  }

  async create(userData: CreateUserDto) {
    const newUser = await this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async update(id: number, userData: UpdateUserDto) {
    if (await this.usersRepository.findOne({where:{id}})) {
      if(await this.usersRepository.update(id, {...userData, id: undefined})){
        return await this.usersRepository.findOne({where:{id}});
      }
      throw new HttpException("User not updated", HttpStatus.BAD_REQUEST);
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async delete(id: number) {
    const deleteResponse = await this.usersRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}