export class CreateNoticeConfigDto {
    noticeTitle: string
    noticeDate: string
    noticeName: string
    innerNoticeData: IInnerNoticeData
    dashboardInfo: IDashboardInfo
}

export interface IInnerNoticeData {
    img: string
    noticeInfoText: string
}

export interface IDashboardInfo {
    displayName: string,
}
