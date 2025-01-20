/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  Max,
  IsDate,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Decimal } from "decimal.js";
import { Type } from "class-transformer";
import { Order } from "../../order/base/Order";
import { Payment } from "../../payment/base/Payment";

@ObjectType()
class Deposit {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @Field(() => Float)
  amount!: Decimal;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Order,
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  orders?: Order | null;

  @ApiProperty({
    required: false,
    type: () => Payment,
  })
  @ValidateNested()
  @Type(() => Payment)
  @IsOptional()
  payments?: Payment | null;
}

export { Deposit as Deposit };
