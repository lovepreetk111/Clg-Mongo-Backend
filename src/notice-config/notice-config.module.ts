import { Module } from '@nestjs/common';
import { NoticeConfigService } from './notice-config.service';
import { NoticeConfigController } from './notice-config.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticeConfigData } from './notice-config.schema';
import { NoticeConfigDataSchema } from './notice-config.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: NoticeConfigData.name,
        schema: NoticeConfigDataSchema
      },
    ])
  ],
  controllers: [NoticeConfigController],
  providers: [NoticeConfigService]
})
export class NoticeConfigModule { }
