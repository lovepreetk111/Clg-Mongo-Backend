import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IsocialMedia } from './dto/create-footer.dto';

export type FooterDocument = HydratedDocument<Footer>;

@Schema()
export class Footer {
  @Prop()
  number:string
  @Prop()
  mail:string
  @Prop()
  socialMedia:IsocialMedia[]
}

export const FooterSchema = SchemaFactory.createForClass(Footer);
