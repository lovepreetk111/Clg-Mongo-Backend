import { PartialType } from '@nestjs/mapped-types';
import { CreateClgDbDto } from './create-clg-db.dto';

export class UpdateClgDbDto extends PartialType(CreateClgDbDto) {
  id: string;
  noticeLink: string;

  // logoUrl: string
  // logoAlt: string
  // link: string
  // impLinks: string
  // routeLinks: string
  // nav: string
  // dropdown: string
  // url: string
  // subchild:string
  // routeLink:string
}
