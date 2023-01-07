import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BanData } from './banner-carousel.schema';
import { CreateBannerCarousalDbDto } from './dto/create-banner-carousal-db.dto';
import { UpdateBannerCarousalDbDto } from './dto/update-banner-carousal-db.dto';

@Injectable()
export class BannerCarousalDbService {
  constructor(@InjectModel(BanData.name) private readonly BanDataModel:Model<BanData>){}
  create(createBannerCarousalDbDto: CreateBannerCarousalDbDto):Promise<any> {
    const createBan = new this.BanDataModel(createBannerCarousalDbDto);
    return createBan.save();
  }

 async findAll():Promise <BanData[]> {
    return this.BanDataModel.find()
    .exec();
  }

 /*  findOne(id: number) {
    return this.BanDataModel.findById(id);
  }

  update(id: number, updateBannerCarousalDbDto: UpdateBannerCarousalDbDto) {
    return this.BanDataModel.findByIdAndUpdate(id,updateBannerCarousalDbDto);
  }

  remove(id: number) {
    return this.BanDataModel.findByIdAndRemove(id);
  } */
  
  async findOne(id: string) {
    return this.BanDataModel.findById(id);
  }

  async update(id: string, updateClgDbDto: UpdateBannerCarousalDbDto): Promise < BanData > {
    return this.BanDataModel.findByIdAndUpdate(id, updateClgDbDto);
  }

  async findAllActive(){
    
  return this.BanDataModel.find({
    Active:true
  })
  }


  async remove(id: string) {
    return this.BanDataModel.findByIdAndRemove(id);
  }
}
