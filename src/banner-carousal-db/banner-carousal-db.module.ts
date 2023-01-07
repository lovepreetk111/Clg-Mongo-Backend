import { Module } from '@nestjs/common';
import { BannerCarousalDbService } from './banner-carousal-db.service';
import { BannerCarousalDbController } from './banner-carousal-db.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BanData, BanDataSchema } from './banner-carousel.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BanData.name,
        schema: BanDataSchema,
      },
    ]),
  ],
  controllers: [BannerCarousalDbController],
  providers: [BannerCarousalDbService]
})
export class BannerCarousalDbModule {}
