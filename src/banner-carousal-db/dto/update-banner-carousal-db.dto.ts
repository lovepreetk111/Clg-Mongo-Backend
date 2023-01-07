import { PartialType } from '@nestjs/mapped-types';
import { CreateBannerCarousalDbDto, Ibackground, IcarouselInfo, Iimage, IinnerData } from './create-banner-carousal-db.dto';

export class UpdateBannerCarousalDbDto extends PartialType(CreateBannerCarousalDbDto) {
    innerData:IinnerData
    background:Ibackground
    image:Iimage
    routeLink:string
    carouselDetails:IcarouselInfo
}
