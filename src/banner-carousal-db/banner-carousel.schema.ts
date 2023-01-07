import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';
import { Ibackground, IcarouselInfo, Iimage, IinnerData } from './dto/create-banner-carousal-db.dto';

export type BanDataDocument = HydratedDocument<BanData>;

@Schema({timestamps:true})
export class BanData {
  @Prop()
  innerData:IinnerData[]
  @Prop()
  background:Ibackground[]
  @Prop()
  image:Iimage[]
  @Prop()
  routeLink:String
  @Prop()
  carouselDetails:IcarouselInfo[]
  @Prop({
    default:false
  })
  Active:boolean;
}

export const BanDataSchema = SchemaFactory.createForClass(BanData);
