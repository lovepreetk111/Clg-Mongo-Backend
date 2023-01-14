import { PartialType } from '@nestjs/mapped-types';
import { CreateNoticeConfigDto, IDashboardInfo, IInnerNoticeData } from './create-notice-config.dto';

export class UpdateNoticeConfigDto extends PartialType(CreateNoticeConfigDto) {
    innerNoticeData: IInnerNoticeData
    dashboardInfo: IDashboardInfo
    noticeTitle: string
    noticeDate: string
    noticeName: string
}
