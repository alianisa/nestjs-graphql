/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsInt,
  Max,
  IsNumber,
  ValidateNested,
} from "class-validator";
import { Decimal } from "decimal.js";
import { SalonServiceCategoryWhereUniqueInput } from "../../salonServiceCategory/base/SalonServiceCategoryWhereUniqueInput";
import { Type } from "class-transformer";
import { SalonWhereUniqueInput } from "../../salon/base/SalonWhereUniqueInput";

@InputType()
class SalonServiceCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

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
  duration?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  img?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  price?: Decimal | null;

  @ApiProperty({
    required: false,
    type: () => SalonServiceCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalonServiceCategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => SalonServiceCategoryWhereUniqueInput, {
    nullable: true,
  })
  salonServiceCategories?: SalonServiceCategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SalonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalonWhereUniqueInput)
  @IsOptional()
  @Field(() => SalonWhereUniqueInput, {
    nullable: true,
  })
  salons?: SalonWhereUniqueInput | null;
}

export { SalonServiceCreateInput as SalonServiceCreateInput };
