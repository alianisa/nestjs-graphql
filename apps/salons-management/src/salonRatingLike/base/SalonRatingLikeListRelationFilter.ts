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
import { SalonRatingLikeWhereInput } from "./SalonRatingLikeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SalonRatingLikeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SalonRatingLikeWhereInput,
  })
  @ValidateNested()
  @Type(() => SalonRatingLikeWhereInput)
  @IsOptional()
  @Field(() => SalonRatingLikeWhereInput, {
    nullable: true,
  })
  every?: SalonRatingLikeWhereInput;

  @ApiProperty({
    required: false,
    type: () => SalonRatingLikeWhereInput,
  })
  @ValidateNested()
  @Type(() => SalonRatingLikeWhereInput)
  @IsOptional()
  @Field(() => SalonRatingLikeWhereInput, {
    nullable: true,
  })
  some?: SalonRatingLikeWhereInput;

  @ApiProperty({
    required: false,
    type: () => SalonRatingLikeWhereInput,
  })
  @ValidateNested()
  @Type(() => SalonRatingLikeWhereInput)
  @IsOptional()
  @Field(() => SalonRatingLikeWhereInput, {
    nullable: true,
  })
  none?: SalonRatingLikeWhereInput;
}
export { SalonRatingLikeListRelationFilter as SalonRatingLikeListRelationFilter };
