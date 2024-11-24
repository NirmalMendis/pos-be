import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';

export class ItemsRepository extends Repository<Item> {
  constructor(
    @InjectRepository(Item)
    private repository: Repository<Item>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
