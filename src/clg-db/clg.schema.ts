import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClgDocument = HydratedDocument<Notice>;

@Schema()
export class Notice {
  @Prop()
  id: string;
  @Prop()
  noticeLink: string;
  
  // @Prop()
  // logoAlt: string;
  // @Prop()
  // link: string;
  // @Prop()
  // impLinks: string;
  // @Prop()
  // routeLinks: string;
  // @Prop()
  // nav: string;
  // @Prop()
  // dropdown: string;
  // @Prop()
  // url: string;
  // @Prop()
  // subchild: string;
  // @Prop()
  // routeLink: string;
}

export const NoticeSchema = SchemaFactory.createForClass(Notice);
