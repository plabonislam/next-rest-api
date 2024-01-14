import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
  findOne(id: string) {
    return {
      user: {
        id: id,
      },
    };
  }

  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }
}