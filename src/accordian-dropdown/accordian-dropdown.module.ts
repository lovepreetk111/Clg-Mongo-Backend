import { Module } from '@nestjs/common';
import { AccordianDropdownService } from './accordian-dropdown.service';
import { AccordianDropdownController } from './accordian-dropdown.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Accordian, AccordianSchema } from './accordian.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Accordian.name,
        schema: AccordianSchema,
      },
    ]),
  ],
  controllers: [AccordianDropdownController],
  providers: [AccordianDropdownService]
})
export class AccordianDropdownModule {}
