import { Module } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { NoticeController } from './notice.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticeConfig } from './notice.schema';
import { NoticeSchema } from 'src/clg-db/clg.schema';

@Module({
imports:[
  MongooseModule.forFeature([
    {
      name:NoticeConfig.name,
      schema:NoticeSchema
    },
  ])],
  controllers:[NoticeController],
 providers: [NoticeService]
})
export class NoticeModule {}
