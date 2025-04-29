import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Menu } from 'src/db/models/menu.model';
import { MenuRepoService } from './repositories/menu-repo/menu-repo.service';
import { Sequelize } from 'sequelize-typescript';

@Module({
    imports: [
      SequelizeModule.forRootAsync({
        useFactory: async () => ({
          dialect: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'sequlizeDb',
          autoLoadModels: true,
          synchronize: true,
        }),
      }),
        SequelizeModule.forFeature([Menu])
      ],
    providers: [MenuRepoService],
    exports: [MenuRepoService]
})
export class DbModule {
  constructor(  private readonly sequelize: Sequelize){}
  async onModuleInit() {
    this.sequelize.sync();
  }
  /* async onModuleInit() {
    await Menu.sync();  // Syncs the User model with DB
    console.log('DB synced');
  } */
}
