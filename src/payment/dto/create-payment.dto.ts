import { IsOptional, IsString, IsDateString, IsEnum, IsArray, IsNumber } from 'class-validator';
import { PaymentStatus } from '../../entities/payments.entity';

export class CreatePaymentDto {
  @IsOptional()
  @IsEnum(PaymentStatus)
  status?: PaymentStatus;

  @IsOptional()
  @IsDateString()
  paymentDate?: Date;

  @IsOptional()
  @IsString()
  paymentMethod?: string;

  @IsOptional()
  @IsString()
  transactionCode?: string;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  userIds?: number[];
}