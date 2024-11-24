import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { ItemsRepository } from './items.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService, ItemsRepository],
  imports: [TypeOrmModule.forFeature([Item])],
})
export class ItemsModule {}
