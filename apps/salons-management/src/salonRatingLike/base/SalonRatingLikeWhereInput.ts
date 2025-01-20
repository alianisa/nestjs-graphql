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
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SalonRatingWhereUniqueInput } from "../../salonRating/base/SalonRatingWhereUniqueInput";
import { SalonWhereUniqueInput } from "../../salon/base/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../../userProfile/base/UserProfileWhereUniqueInput";

@InputType()
class SalonRatingLikeWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  createdAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  review?: StringNullableFilter;

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
  salonRatings?: SalonRatingWhereUniqueInput;

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
  salons?: SalonWhereUniqueInput;

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
  userProfilesSalonRatingLikesUserIdTouserProfiles?: UserProfileWhereUniqueInput;

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
  userProfilesSalonRatingLikesVoterIdTouserProfiles?: UserProfileWhereUniqueInput;
}

export { SalonRatingLikeWhereInput as SalonRatingLikeWhereInput };
