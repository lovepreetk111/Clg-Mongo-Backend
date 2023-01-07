import { PartialType } from '@nestjs/mapped-types';
import { CreateAccordianDropdownDto, IAccordianData, IDropDown, Ileftimg1, } from './create-accordian-dropdown.dto';

export class UpdateAccordianDropdownDto extends PartialType(CreateAccordianDropdownDto) {

   dropdown:IDropDown[]
}
