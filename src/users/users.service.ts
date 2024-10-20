import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create({ passkey: createUserDto.password, ...createUserDto });
    return this.usersRepository.save(user);
  }

  findAll() {
    const allUser = this.usersRepository.find();
    return allUser;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  findByEmail(email: User['email']): Promise<User | undefined> {
    return this.usersRepository.findByEmail(email);
  }

  findForAuth(email: User['email']): Promise<User | undefined> {
    return this.usersRepository.findForAuth(email);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
