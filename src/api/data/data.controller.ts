import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}
  @Get()
    getDatas() {
        return this.dataService.getDatas();
    }
    @Get('navbarData')
    getNavbarData(){
      return this.dataService.getNavbarData()
    }

    @Get('footerData')
    getFooterData(){
      return this.dataService.getFooterData();
    }

    @Get('noticeData')
    getNoticeData(){
      return this.dataService.getNoticeData();
    }

    @Get('homeData')
    getHomeData(){
      return this.dataService.getHomeData();
    }

    // @Get('bannercarousel')
    // getbannerCarouselData(){
    //   return this.dataService.getbannerCarouselData();
    // }

    // @Get('aboutUsData')
    // getAboutUsSectionData(){
    //   return this.dataService.getAboutUsSectionData();
    // }
    // @Get('accordian')
    // getaccordianData(){
    //   return this.dataService.getaccordianData();
    // }
    // @Get('cardcarosuel')
    // getcardcarosuelData(){
    //   return this.dataService.getcardcarosuelData();
    // }
    // @Get('testimonials')
    // gettestimonialsData(){
    //   return this.dataService.gettestimonialsData();
    // }
    
}
