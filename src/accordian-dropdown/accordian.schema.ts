import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IAccordianData, IDropDown, Ileftimg1 } from './dto/create-accordian-dropdown.dto';


export type FooterDocument = HydratedDocument<Accordian>;

@Schema()
export class Accordian {

  @Prop()
  dropdown:IDropDown[]
  // @Prop()
  // data: Ileftimg1[]
  
}

export const AccordianSchema = SchemaFactory.createForClass(Accordian);
