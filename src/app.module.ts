import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { MenuModule } from './menu/menu.module';



@Module({
  imports: [DbModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
