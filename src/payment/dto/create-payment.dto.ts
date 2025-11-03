import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, IsNumber, IsDateString, IsInt, IsPositive } from 'class-validator';
import { PaymentStatus, PaymentMethod, PaymentEntityType } from '../../entities/payments.entity';

export class CreatePaymentDto {  // ← CORREGIDO: CreatePaymentDto (singular)
  @IsEnum(PaymentStatus)
  @IsOptional()
  status?: PaymentStatus;

  @IsDateString()
  @IsOptional()
  paymentDate?: Date;

  @IsEnum(PaymentMethod)
  @IsOptional()
  paymentMethod?: PaymentMethod;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  transactionCode?: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @MaxLength(3)
  @IsOptional()
  currency?: string;

  @IsEnum(PaymentEntityType)
  @IsNotEmpty()
  entityType: PaymentEntityType;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  entityId: number;
}