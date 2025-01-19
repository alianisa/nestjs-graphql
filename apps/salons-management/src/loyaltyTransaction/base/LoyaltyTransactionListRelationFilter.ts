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
import { LoyaltyTransactionWhereInput } from "./LoyaltyTransactionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LoyaltyTransactionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LoyaltyTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => LoyaltyTransactionWhereInput)
  @IsOptional()
  @Field(() => LoyaltyTransactionWhereInput, {
    nullable: true,
  })
  every?: LoyaltyTransactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => LoyaltyTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => LoyaltyTransactionWhereInput)
  @IsOptional()
  @Field(() => LoyaltyTransactionWhereInput, {
    nullable: true,
  })
  some?: LoyaltyTransactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => LoyaltyTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => LoyaltyTransactionWhereInput)
  @IsOptional()
  @Field(() => LoyaltyTransactionWhereInput, {
    nullable: true,
  })
  none?: LoyaltyTransactionWhereInput;
}
export { LoyaltyTransactionListRelationFilter as LoyaltyTransactionListRelationFilter };
