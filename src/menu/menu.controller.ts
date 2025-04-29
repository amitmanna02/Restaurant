import { Body, Controller, Post, Get, Delete, Param } from '@nestjs/common';
import MenuService from './menu.service';
import { CreateMenuDto } from './Dtos/menu.dto';
import { Menu } from '../db/models/menu.model';

@Controller('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}
  @Post('create')
  async create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }
  @Get('getAll')
  async getAll() {
    return this.menuService.getAll();
  }
  @Get('getOne/:id')
  async getOne(@Param('id') id: string): Promise<Menu | null> {
    return this.menuService.getOne(id);
  }
  @Delete('remove/:id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.menuService.remove(id);
  }
  @Get('totalItem')
  async totalItem() {
    return this.menuService.totalItem();
  }
  @Get('availableItem')
  async getAvailableItem() {
    return this.menuService.filterAvailableItems();
  }
}
