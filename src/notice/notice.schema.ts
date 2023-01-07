import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type NoticeConfigDocument = HydratedDocument<NoticeConfig>;

@Schema({timestamps:true})
export class NoticeConfig {
  @Prop()
  noticeName:string
  @Prop()
    noticeDes:string
    @Prop()
    routeLink:string
}

export const NoticeConfigSchema = SchemaFactory.createForClass(NoticeConfig);
