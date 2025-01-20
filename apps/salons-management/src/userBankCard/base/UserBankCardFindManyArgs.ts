/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserBankCardWhereInput } from "./UserBankCardWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserBankCardOrderByInput } from "./UserBankCardOrderByInput";

@ArgsType()
class UserBankCardFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserBankCardWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserBankCardWhereInput, { nullable: true })
  @Type(() => UserBankCardWhereInput)
  where?: UserBankCardWhereInput;

  @ApiProperty({
    required: false,
    type: [UserBankCardOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserBankCardOrderByInput], { nullable: true })
  @Type(() => UserBankCardOrderByInput)
  orderBy?: Array<UserBankCardOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserBankCardFindManyArgs as UserBankCardFindManyArgs };
