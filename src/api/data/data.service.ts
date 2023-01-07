import { Injectable } from '@nestjs/common';
import { accordian, bannerCarouselData, footerData, headerData, homeData, noticeData } from './data.mock';
// import { aboutSection, accordian, bannerCarouselData, cardcarosuel, footerData, headerData, noticeData, testimonials } from './data.mock';

@Injectable()
export class DataService {
  private navbarData = headerData
  private datas={
    navbarData: headerData,
     footerData: footerData,
    noticeData :noticeData,
    homeData : homeData,
    //bannercarouselData :bannerCarouselData,
    // aboutSection :aboutSection,
    accordian : accordian,
    // cardcarosuelData :cardcarosuel,
    // testimonialsData :testimonials,
  }

  public getDatas(){
    return this.datas;
  }
  
  getNavbarData(){
    return this.datas.navbarData;
  }

  getFooterData(){
    return this.datas.footerData
  }

  getNoticeData(){
    return this.datas.noticeData
  }

  getHomeData(){
    return this.datas.homeData
  }

  // getbannerCarouselData(){
  //   return this.datas.bannercarouselData
  // }

  // getAboutUsSectionData(){
  //   return this.datas.aboutSection
  // }

  // getaccordianData(){
  //   return this.datas.accordian
  // }

  // getcardcarosuelData(){
  //   return this.datas.cardcarosuelData
  // }

  // gettestimonialsData(){
  //   return this.datas.testimonialsData
  // }
  
}
