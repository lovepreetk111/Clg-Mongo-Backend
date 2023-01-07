export class CreateAccordianDropdownDto {
   dropdown:IDropDown[]
}

export interface IDropDown {
  data: Ileftimg1[]
  AccordianData: IAccordianData[]
}
/* Accordian Component */
export interface IAccordianData {
  // data: Ileftimg1[]
  Title: string;
  SubTitles:IsubTitleData[]
}

export interface IsubTitleData{
  title:string,
  link:string
}
/* Left image1 component */
export interface Ileftimg1 {
  url: string;
  alt: string;
  Text: string
}

  