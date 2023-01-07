import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notice } from './clg.schema';
import { CreateClgDbDto } from './dto/create-clg-db.dto';
import { UpdateClgDbDto } from './dto/update-clg-db.dto';

@Injectable()
export class ClgDbService {
  constructor(@InjectModel(Notice.name) private readonly NoticeModel: Model < Notice > ){}
  async create(createClgDbDto: CreateClgDbDto): Promise<Notice> {
    const createdClg = new this.NoticeModel(createClgDbDto);
    return createdClg.save();
  }

  async findAll(): Promise < Notice[] > {
    return this.NoticeModel.find()
      .exec();
  }

  async findOne(id: string) {
    return this.NoticeModel.findById(id);
  }

  async update(id: string, updateClgDbDto: UpdateClgDbDto): Promise < Notice > {
    return this.NoticeModel.findByIdAndUpdate(id, updateClgDbDto);
  }

  async remove(id: string) {
    return this.NoticeModel.findByIdAndRemove(id);
  }
}

