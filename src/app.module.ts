import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { MenuModule } from './menu/menu.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';



@Module({
  imports: [DbModule, MenuModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
