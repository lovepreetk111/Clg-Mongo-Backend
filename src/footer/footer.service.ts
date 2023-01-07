import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFooterDto } from './dto/create-footer.dto';
import { UpdateFooterDto } from './dto/update-footer.dto';
import { FooterModule } from './footer.module';
import { Footer } from './footer.schema';

@Injectable()
export class FooterService {
  constructor(@InjectModel(Footer.name) private readonly FooterModel:Model<Footer>){}
  create( CreateFooterDto: CreateFooterDto): Promise<any> {
    const createBan = new this.FooterModel(CreateFooterDto);
    return createBan.save();
  }

  async findAll():Promise <Footer[]> {
    return this.FooterModel.find()
    .exec();
  }

  async findOne(id: string) {
    return this.FooterModel.findById(id);
  }

  async update(id: string, updateFooterDbo: UpdateFooterDto): Promise <Footer> {
    return this.FooterModel.findByIdAndUpdate(id, updateFooterDbo);
  }


  async remove(id: string) {
    return this.FooterModel.findByIdAndRemove(id);
  }
}
