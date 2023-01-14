import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { IDashboardInfo, IInnerNoticeData } from "./dto/create-notice-config.dto";

export type NoticeConfigDocument = HydratedDocument<NoticeConfigData>;

@Schema({timestamps:true})
export class NoticeConfigData{
    @Prop()
    noticeTitle: string
    @Prop()
    noticeDate: string
    @Prop()
    noticeName: string
    @Prop()
    innerNoticeData: IInnerNoticeData[]
    @Prop()
    dashboardInfo: IDashboardInfo[]  
}

export const NoticeConfigDataSchema = SchemaFactory.createForClass(NoticeConfigData)