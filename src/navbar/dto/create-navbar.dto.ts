export class CreateNavbarDto {
  id: string;
  implinksdata: IImpLinks[];
  logo: InavLogo[];
}
export interface InavLogo {
  logoUrl: string;
  logoAlt: string;
  link: string;
}
export interface IImpLinks {
  id: string;
  impLinks: string;
  routeLinks: string;
}
export interface INavbarData {
  nav: string;
  link: string;
  child: IDropDownChild[];
}
export interface IDropDownChild {
  dropdown: string;
  url: string;
  subchild: IDropDownSubChild[];
}
export interface IDropDownSubChild {
  subchild: string;
  routeLink: string;
}
