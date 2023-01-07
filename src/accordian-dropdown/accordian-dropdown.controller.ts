import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AccordianDropdownService } from './accordian-dropdown.service';
import { CreateAccordianDropdownDto } from './dto/create-accordian-dropdown.dto';
import { UpdateAccordianDropdownDto } from './dto/update-accordian-dropdown.dto';

@Controller('accordian-dropdown')
export class AccordianDropdownController {
  constructor(private readonly accordianDropdownService: AccordianDropdownService) {}

  // @Post()
  // create(@Body() createAccordianDropdownDto: CreateAccordianDropdownDto) {
  //   return this.accordianDropdownService.create(createAccordianDropdownDto);
  // }

  // @Get()
  // findAll() {
  //   return this.accordianDropdownService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.accordianDropdownService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAccordianDropdownDto: UpdateAccordianDropdownDto) {
  //   return this.accordianDropdownService.update(+id, updateAccordianDropdownDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.accordianDropdownService.remove(+id);
  // }
  @Post()
  create(@Body() createAccordianDropdownDto: CreateAccordianDropdownDto) {
    const changes = this.accordianDropdownService.create(createAccordianDropdownDto);
    return `changes ${changes}`
  }

  @Get()
  findAll() {
    return this.accordianDropdownService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accordianDropdownService.findOne(id);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accordianDropdownService.remove(id);
  }
  
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAccordianDropdownDto: UpdateAccordianDropdownDto) {
    return this.accordianDropdownService.update(id,updateAccordianDropdownDto);
  }




}
