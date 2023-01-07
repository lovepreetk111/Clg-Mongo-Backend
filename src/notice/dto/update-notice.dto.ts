import { PartialType } from '@nestjs/mapped-types';
import { INoticeConfig } from './create-notice.dto';

export class UpdateNoticeDto extends PartialType(INoticeConfig) {
    noticeName:string
    noticeDes:string
    routeLink:string    
}
