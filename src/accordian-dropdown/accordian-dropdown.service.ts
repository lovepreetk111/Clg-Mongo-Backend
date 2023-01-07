import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Accordian } from './accordian.schema';
import { CreateAccordianDropdownDto } from './dto/create-accordian-dropdown.dto';
import { UpdateAccordianDropdownDto } from './dto/update-accordian-dropdown.dto';

@Injectable()
export class AccordianDropdownService {
  // create(createAccordianDropdownDto: CreateAccordianDropdownDto) {
  //   return 'This action adds a new accordianDropdown';
  // }

  // findAll() {
  //   return `This action returns all accordianDropdown`;
  // }

  // findOne(id: string) {
  //   return `This action returns a #${id} accordianDropdown`;
  // }

  // update(id: string, updateAccordianDropdownDto: UpdateAccordianDropdownDto) {
  //   return `This action updates a #${id} accordianDropdown`;
  // }

  // remove(id: string) {
  //   return `This action removes a #${id} accordianDropdown`;
  // }


  constructor(@InjectModel(Accordian.name) private readonly AccordianModel:Model<Accordian>){}
  create( createAccordianDropdownDto: CreateAccordianDropdownDto): Promise<any> {
    const createBan = new this.AccordianModel(createAccordianDropdownDto);
    return createBan.save();
  }

  async findAll():Promise <Accordian[]> {
    return this.AccordianModel.find()
    .exec();
  }

  async findOne(id: string) {
    return this.AccordianModel.findById(id);
  }

  async update(id: string, updateAccordianDropdownDto: UpdateAccordianDropdownDto): Promise <Accordian> {
    return this.AccordianModel.findByIdAndUpdate(id, updateAccordianDropdownDto);
  }


  async remove(id: string) {
    return this.AccordianModel.findByIdAndRemove(id);
  }

}
