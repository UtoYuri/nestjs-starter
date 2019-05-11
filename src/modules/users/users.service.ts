import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private readonly usersRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll();
  }
}
