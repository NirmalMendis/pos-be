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

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
