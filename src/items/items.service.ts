import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemsRepository } from './items.repository';
import { paginateData } from 'src/utils/helpers/paginateData';
import { ListRequestDto } from 'src/utils/dto/list.request';

@Injectable()
export class ItemsService {
  constructor(private itemsRepository: ItemsRepository) {}

  create(createItemDto: CreateItemDto) {
    const user = this.itemsRepository.create(createItemDto);
    return this.itemsRepository.save(user);
  }

  async findAll(query: ListRequestDto) {
    const results = await this.itemsRepository.find();
    const { pager, data } = paginateData(query.page, query.pageSize, results);

    return { pager, data };
  }

  findOne(id: string) {
    return this.itemsRepository.findOneBy({ id });
  }

  update(id: string, updateItemDto: UpdateItemDto) {
    return this.itemsRepository.update(id, updateItemDto);
  }

  remove(id: string) {
    return this.itemsRepository.softDelete(id);
  }
}
