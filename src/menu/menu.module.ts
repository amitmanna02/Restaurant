import { Controller, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Menu } from '../db/models/menu.model';
import MenuService from './menu.service';
import { MenuController } from './menu.controller';
import { DbModule } from 'src/db/db.module';

@Module({
    imports: [DbModule],
    providers:[MenuService],
    controllers: [MenuController]
})
export class MenuModule {}
