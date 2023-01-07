import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IDropDownChild, IDropDownSubChild, IImpLinks, INavbarData, InavLogo } from './dto/create-navbar.dto';

export type ClgDocument = HydratedDocument<Navbar>;

@Schema()
export class Navbar {
  @Prop()
  implinksdata:IImpLinks[]
  @Prop()
  logo:InavLogo[]
  @Prop()
  navbar:INavbarData[]
  /* @Prop()
  child:IDropDownChild[]
  @Prop()
  subchild:IDropDownSubChild[] */
}

export const NavbarSchema = SchemaFactory.createForClass(Navbar);
