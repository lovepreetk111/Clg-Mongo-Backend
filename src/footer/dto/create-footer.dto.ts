export class CreateFooterDto {
   number:string;
   mail:string;
   socialMedia:IsocialMedia[]
}

export interface IsocialMedia{
   url:string,
   alt:string,
   link:string
}