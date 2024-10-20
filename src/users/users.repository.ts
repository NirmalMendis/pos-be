import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class UsersRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async findByEmail(email: User['email']) {
    return this.repository.findOneBy({
      email,
    });
  }

  async findForAuth(email: User['email']) {
    return this.repository.findOne({
      where: { email },
      select: {
        email: true,
        uuid: true,
        passkey: true,
      },
    });
  }
}
