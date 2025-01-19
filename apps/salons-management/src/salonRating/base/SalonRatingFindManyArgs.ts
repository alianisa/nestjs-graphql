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
import { SalonRatingWhereInput } from "./SalonRatingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SalonRatingOrderByInput } from "./SalonRatingOrderByInput";

@ArgsType()
class SalonRatingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SalonRatingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SalonRatingWhereInput, { nullable: true })
  @Type(() => SalonRatingWhereInput)
  where?: SalonRatingWhereInput;

  @ApiProperty({
    required: false,
    type: [SalonRatingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SalonRatingOrderByInput], { nullable: true })
  @Type(() => SalonRatingOrderByInput)
  orderBy?: Array<SalonRatingOrderByInput>;

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

export { SalonRatingFindManyArgs as SalonRatingFindManyArgs };
