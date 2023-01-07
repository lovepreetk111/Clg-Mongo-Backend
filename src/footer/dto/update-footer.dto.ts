import { PartialType } from '@nestjs/mapped-types';
import { CreateFooterDto, IsocialMedia } from './create-footer.dto';

export class UpdateFooterDto extends PartialType(CreateFooterDto) {
    number:string
    mail:string
    socialMedia:IsocialMedia[]
}
