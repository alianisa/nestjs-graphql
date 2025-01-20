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
import { PromocodeWhereInput } from "./PromocodeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PromocodeOrderByInput } from "./PromocodeOrderByInput";

@ArgsType()
class PromocodeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PromocodeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PromocodeWhereInput, { nullable: true })
  @Type(() => PromocodeWhereInput)
  where?: PromocodeWhereInput;

  @ApiProperty({
    required: false,
    type: [PromocodeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PromocodeOrderByInput], { nullable: true })
  @Type(() => PromocodeOrderByInput)
  orderBy?: Array<PromocodeOrderByInput>;

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

export { PromocodeFindManyArgs as PromocodeFindManyArgs };
