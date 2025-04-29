import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import sequelize from 'sequelize';
import { Menu } from 'src/db/models/menu.model';

@Injectable()
export class MenuRepoService {
  constructor(@InjectModel(Menu) private readonly menuModel: typeof Menu) {}
  async create(createMenuDto: any): Promise<Menu> {
    return this.menuModel.create(createMenuDto);
  }
  async getAll(): Promise<Menu[]> {
    return this.menuModel.findAll({
      attributes: ['name', 'description', 'price', 'available'],
    });
  }
  async getOne(id: string) {
    return this.menuModel.findOne({
      where: { id },
    });
  }
  async remove(id: string): Promise<void> {
    const menuItem = await this.menuModel.findOne({
      where: { id },
    });
    return menuItem?.destroy();
  }
  async totalItem(): Promise<Menu[]> {
    return this.menuModel.findAll({
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('name')), 'total_item'],
      ],
    });
  }
  async filterAvailableItems(): Promise<Menu[]> {
    return this.menuModel.findAll({
      where: {
        available: true,
      },
    });
  }
}
