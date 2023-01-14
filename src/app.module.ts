
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccordianDropdownModule } from './accordian-dropdown/accordian-dropdown.module';
import { DataController } from './api/data/data.controller';
import { DataModule } from './api/data/data.module';
import { DataService } from './api/data/data.service';
import { BannerCarousalDbController } from './banner-carousal-db/banner-carousal-db.controller';
import { BannerCarousalDbModule } from './banner-carousal-db/banner-carousal-db.module';
import { BannerCarousalDbService } from './banner-carousal-db/banner-carousal-db.service';
import { ClgDbModule } from './clg-db/clg-db.module';
import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { NoticeConfigModule } from './notice-config/notice-config.module';



@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Ritesh:XVQr2R6MJQ1NJFPA@cluster0.0cbprx1.mongodb.net/?retryWrites=true&w=majority'), ClgDbModule, BannerCarousalDbModule, FooterModule, AccordianDropdownModule,NavbarModule, NoticeConfigModule],
  controllers: [],
  providers:[]
})
export class AppModule {}
