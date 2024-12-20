import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ListRequestDto } from 'src/utils/dto/list.request';
import { SuccessResponse } from 'src/utils/responses/success.response';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  async findAll(@Query() query: ListRequestDto) {
    return new SuccessResponse(await this.itemsService.findAll(query));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new SuccessResponse(await this.itemsService.findOne(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(id);
  }
}
