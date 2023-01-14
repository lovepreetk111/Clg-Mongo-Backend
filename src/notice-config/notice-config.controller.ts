import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { NoticeConfigService } from './notice-config.service';
import { CreateNoticeConfigDto } from './dto/create-notice-config.dto';
import { UpdateNoticeConfigDto } from './dto/update-notice-config.dto';

@Controller('notice-config')
export class NoticeConfigController {
  constructor(private readonly noticeConfigService: NoticeConfigService) {}

  @Post()
  create(@Body() createNoticeConfigDto: CreateNoticeConfigDto) {
    return this.noticeConfigService.create(createNoticeConfigDto);
  }

  @Get()
  findAll() {
    return this.noticeConfigService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noticeConfigService.findOne(id);
  }

/*   @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoticeConfigDto: UpdateNoticeConfigDto) {
    return this.noticeConfigService.update(+id, updateNoticeConfigDto);
  } */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noticeConfigService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id:string, @Body() updateNoticeConfigDto:UpdateNoticeConfigDto){
    return this.noticeConfigService.update(id, updateNoticeConfigDto)
  }
}
