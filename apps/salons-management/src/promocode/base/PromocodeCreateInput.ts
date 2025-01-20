/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  ValidateNested,
  IsOptional,
  IsDate,
  IsBoolean,
  IsInt,
  Max,
} from "class-validator";

import { DiscountWhereUniqueInput } from "../../discount/base/DiscountWhereUniqueInput";
import { Type } from "class-transformer";
import { OrderCreateNestedManyWithoutPromocodesInput } from "./OrderCreateNestedManyWithoutPromocodesInput";

@InputType()
class PromocodeCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  code!: string;

  @ApiProperty({
    required: false,
    type: () => DiscountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DiscountWhereUniqueInput)
  @IsOptional()
  @Field(() => DiscountWhereUniqueInput, {
    nullable: true,
  })
  discounts?: DiscountWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutPromocodesInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutPromocodesInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutPromocodesInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutPromocodesInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  usageLimit?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  usedCount?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  userLimit?: number | null;
}

export { PromocodeCreateInput as PromocodeCreateInput };
