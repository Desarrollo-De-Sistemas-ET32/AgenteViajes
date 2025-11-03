import { PartialType } from '@nestjs/mapped-types';
import { CreateUserHasPaymentDto } from './create-user-has-payments.dto';


export class UpdateUserHasPaymentDto extends PartialType(CreateUserHasPaymentDto) {}