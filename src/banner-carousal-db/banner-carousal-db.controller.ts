import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseInterceptors, UploadedFile, BadRequestException, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';
import path from 'path';
import { BannerCarousalDbService } from './banner-carousal-db.service';
import { CreateBannerCarousalDbDto } from './dto/create-banner-carousal-db.dto';
import { UpdateBannerCarousalDbDto } from './dto/update-banner-carousal-db.dto';

@Controller('bannerData')
export class BannerCarousalDbController {
  constructor(private readonly bannerCarousalDbService: BannerCarousalDbService) {}

  @Post()
  create(@Body() createBannerCarousalDbDto: CreateBannerCarousalDbDto) {
    const changes = this.bannerCarousalDbService.create(createBannerCarousalDbDto);
    return changes 
  }

  @Get()
  findAll() {
    return this.bannerCarousalDbService.findAll();
  }

  @Get('active')
  findAllActive() {
    
    return this.bannerCarousalDbService.findAllActive();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bannerCarousalDbService.findOne(id);
  }

  /* @Patch(':id')
  update(@Param('id') id: string, @Body() updateBannerCarousalDbDto: UpdateBannerCarousalDbDto) {
    const changes = this.bannerCarousalDbService.update(id, updateBannerCarousalDbDto);
    return `changes ${changes}`
  } */

  @Delete(':id')
  remove(@Param('id') id: string) {
    const changes = this.bannerCarousalDbService.remove(id);
    return changes
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClgDbDto: UpdateBannerCarousalDbDto) {
    return this.bannerCarousalDbService.update(id,updateClgDbDto);
  }



  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage:diskStorage({
      destination:'./uploads',
      filename:(req,file,cb)=>{
       const name = file.originalname.split('.')[0];
       const fileExtension = file.originalname.split('.')[1];
       const newFileName = name.split(" ").join('_')+'_'+Date.now()+'.'+fileExtension;
       cb(null, newFileName);

      }
    }),
    fileFilter: (req, file, cb)=>{
     if(!file.originalname.match(/\.(jpg|jpeg|png|git|svg)$/)){
      return cb(null, false);
     }
     cb(null, true);
    }
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if(!file){
      throw new BadRequestException('file is not an image');
    }
    else {
      const response = {
        filePath:`http://localhost:3000/bannerData/pictures/${file.filename}`

      };
      return response;
    }
  }



  @Get('pictures/:filename')
  async getPicture(@Param('filename') filename, @Res() res: Response){
    res.sendFile(filename, {root:'./uploads'});
  }


 


}
