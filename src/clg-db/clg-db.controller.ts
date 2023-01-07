import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { ClgDbService } from './clg-db.service';
import { CreateClgDbDto } from './dto/create-clg-db.dto';
import { UpdateClgDbDto } from './dto/update-clg-db.dto';


@Controller('notice')
export class ClgDbController {
  constructor(private readonly clgDbService: ClgDbService) {}

  @Post()
  create(@Body() createClgDbDto: CreateClgDbDto) {
    return this.clgDbService.create(createClgDbDto);
  }

  @Get('')
  findAll() {
    return this.clgDbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clgDbService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClgDbDto: UpdateClgDbDto) {
    return this.clgDbService.update(id,updateClgDbDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clgDbService.remove(id);
  }
}


  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateClgDbDto: UpdateClgDbDto) {
  //   return this.clgDbService.update(+id, updateClgDbDto);
  // }