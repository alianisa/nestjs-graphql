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
  IsOptional,
  ValidateNested,
} from "class-validator";
import { SalonRatingWhereUniqueInput } from "../../salonRating/base/SalonRatingWhereUniqueInput";
import { Type } from "class-transformer";
import { SalonWhereUniqueInput } from "../../salon/base/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../../userProfile/base/UserProfileWhereUniqueInput";

@InputType()
class SalonRatingLikeCreateInput {
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
  review?: string | null;

  @ApiProperty({
    required: false,
    type: () => SalonRatingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalonRatingWhereUniqueInput)
  @IsOptional()
  @Field(() => SalonRatingWhereUniqueInput, {
    nullable: true,
  })
  salonRatings?: SalonRatingWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: () => SalonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalonWhereUniqueInput)
  @Field(() => SalonWhereUniqueInput)
  salons!: SalonWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => UserProfileWhereUniqueInput, {
    nullable: true,
  })
  userProfilesSalonRatingLikesUserIdTouserProfiles?: UserProfileWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => UserProfileWhereUniqueInput, {
    nullable: true,
  })
  userProfilesSalonRatingLikesVoterIdTouserProfiles?: UserProfileWhereUniqueInput | null;
}

export { SalonRatingLikeCreateInput as SalonRatingLikeCreateInput };
