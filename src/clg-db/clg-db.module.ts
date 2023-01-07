import { Module } from '@nestjs/common';
import { ClgDbService } from './clg-db.service';
import { ClgDbController } from './clg-db.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Notice, NoticeSchema } from './clg.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Notice.name,
        schema: NoticeSchema,
      },
    ]),
  ],
  controllers: [ClgDbController],
  providers: [ClgDbService],
})
export class ClgDbModule {}
