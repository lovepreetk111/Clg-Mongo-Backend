import { PartialType } from '@nestjs/mapped-types';
import { CreateNavbarDto, IDropDownChild, IDropDownSubChild, IImpLinks, INavbarData, InavLogo } from './create-navbar.dto';

export class UpdateNavbarDto extends PartialType(CreateNavbarDto) {
    implinksdata:IImpLinks[]
    logo:InavLogo[]
    navbar:INavbarData[]
    
}
