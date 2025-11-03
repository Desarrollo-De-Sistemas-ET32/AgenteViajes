import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateUserHasPaymentDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  userIdUser: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  paymentsIdPayments: number;
}