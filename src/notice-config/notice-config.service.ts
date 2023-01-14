import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNoticeConfigDto } from './dto/create-notice-config.dto';
import { UpdateNoticeConfigDto } from './dto/update-notice-config.dto';
import { NoticeConfigData } from './notice-config.schema';

@Injectable()
export class NoticeConfigService {
  constructor(@InjectModel(NoticeConfigData.name) private readonly NoticeConfigDataModel:Model<NoticeConfigData>){}

  create(createNoticeConfigDto: CreateNoticeConfigDto):Promise<any> {
    const createNoticeData = new this.NoticeConfigDataModel(createNoticeConfigDto);
    return createNoticeData.save();
  }

  async findAll():Promise<NoticeConfigData[]> {
    return this.NoticeConfigDataModel.find()
    .exec()
  }

  async findOne(id: string) {
    return this.NoticeConfigDataModel.findById(id);
  }

 async update(id: string, updateNoticeConfigDto: UpdateNoticeConfigDto):Promise<NoticeConfigData> {
  return this.NoticeConfigDataModel.findByIdAndUpdate(id, updateNoticeConfigDto)
  }

  async remove(id: string) {
    return this.NoticeConfigDataModel.findByIdAndRemove(id);
  }
}
