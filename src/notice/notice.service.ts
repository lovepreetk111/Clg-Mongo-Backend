import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { INoticeConfig } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { NoticeConfig } from './notice.schema';

@Injectable()
export class NoticeService {
  constructor(@InjectModel(NoticeConfig.name) private readonly NoticeConfigModel:Model<NoticeConfig>){}
  create(INoticeConfig: INoticeConfig):Promise<any> {
    const createBan = new this.NoticeConfigModel(INoticeConfig);
    return createBan.save();
  }

 async findAll():Promise <NoticeConfig[]> {
    return this.NoticeConfigModel.find()
    .exec();
  }

 /*  findOne(id: number) {
    return this.NoticeConfigModel.findById(id);
  }

  update(id: number, UpdateNoticeDto: UpdateNoticeDto) {
    return this.NoticeConfigModel.findByIdAndUpdate(id,UpdateNoticeDto);
  }

  remove(id: number) {
    return this.NoticeConfigModel.findByIdAndRemove(id);
  } */
  
  async findOne(id: string) {
    return this.NoticeConfigModel.findById(id);
  }

  async update(id: string, updateClgDbDto: UpdateNoticeDto): Promise < NoticeConfig > {
    return this.NoticeConfigModel.findByIdAndUpdate(id, updateClgDbDto);
  }


  async remove(id: string) {
    return this.NoticeConfigModel.findByIdAndRemove(id);
  }}