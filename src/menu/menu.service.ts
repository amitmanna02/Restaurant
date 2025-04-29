import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { Menu } from '../db/models/menu.model';
import { CreateMenuDto } from './Dtos/menu.dto';
import { MenuRepoService } from 'src/db/repositories/menu-repo/menu-repo.service';
import { InjectModel } from '@nestjs/sequelize';
import { privateDecrypt } from 'crypto';

@Injectable()
export default class MenuService {
  constructor(private menuRepoService : MenuRepoService ){}
  async create(@Body() createMenuDto : CreateMenuDto)
  {
    return this.menuRepoService.create(createMenuDto);
  }
  async getAll()
  {
    return this.menuRepoService.getAll();
  }
  async totalItem()
  {
    return this.menuRepoService.totalItem();
  }
  async getOne(id : string)
  {
    return this.menuRepoService.getOne(id);
  }
  async remove(id : string) : Promise<void>
  {
    return this.menuRepoService.remove(id);
  }
  async filterAvailableItems()
  {
    return this.menuRepoService.filterAvailableItems();
  }
}
