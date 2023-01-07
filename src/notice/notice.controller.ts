import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { INoticeConfig } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';

@Controller('noticeConfig')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Post()
  create(@Body() INoticeConfig: INoticeConfig) {
    const changes = this.noticeService.create(INoticeConfig);
    return changes 
  }

  @Get()
  findAll() {
    return this.noticeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noticeService.findOne(id);
  }

  /* @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateNoticeDto: UpdateNoticeDto) {
    const changes = this.noticeService.update(id, UpdateNoticeDto);
    return `changes ${changes}`
  } */

  @Delete(':id')
  remove(@Param('id') id: string) {
    const changes = this.noticeService.remove(id);
    return changes
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClgDbDto: UpdateNoticeDto) {
    return this.noticeService.update(id,updateClgDbDto);
  }
}
