import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FooterService } from './footer.service';
import { CreateFooterDto } from './dto/create-footer.dto';
import { UpdateFooterDto } from './dto/update-footer.dto';

@Controller('footer')
export class FooterController {
  constructor(private readonly footerService: FooterService) {}

  @Post()
  create(@Body() createFooterDto: CreateFooterDto) {
    const changes = this.footerService.create(createFooterDto);
    return `changes ${changes}`
  }

  @Get()
  findAll() {
    return this.footerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.footerService.findOne(id);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.footerService.remove(id);
  }
  
  @Put(':id')
  update(@Param('id') id: string, @Body() updateClgDbDto: UpdateFooterDto) {
    return this.footerService.update(id,updateClgDbDto);
  }


}
