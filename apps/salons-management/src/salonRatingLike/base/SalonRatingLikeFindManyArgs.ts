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
import { SalonRatingLikeWhereInput } from "./SalonRatingLikeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SalonRatingLikeOrderByInput } from "./SalonRatingLikeOrderByInput";

@ArgsType()
class SalonRatingLikeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SalonRatingLikeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SalonRatingLikeWhereInput, { nullable: true })
  @Type(() => SalonRatingLikeWhereInput)
  where?: SalonRatingLikeWhereInput;

  @ApiProperty({
    required: false,
    type: [SalonRatingLikeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SalonRatingLikeOrderByInput], { nullable: true })
  @Type(() => SalonRatingLikeOrderByInput)
  orderBy?: Array<SalonRatingLikeOrderByInput>;

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

export { SalonRatingLikeFindManyArgs as SalonRatingLikeFindManyArgs };
