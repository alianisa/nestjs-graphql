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
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumMfaFactorFactorType } from "./EnumMfaFactorFactorType";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { MfaChallengeListRelationFilter } from "../../mfaChallenge/base/MfaChallengeListRelationFilter";
import { EnumMfaFactorStatus } from "./EnumMfaFactorStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

@InputType()
class MfaFactorWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    enum: EnumMfaFactorFactorType,
  })
  @IsEnum(EnumMfaFactorFactorType)
  @IsOptional()
  @Field(() => EnumMfaFactorFactorType, {
    nullable: true,
  })
  factor_type?: "totp" | "webauthn" | "phone";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  friendlyName?: StringNullableFilter;

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
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  lastChallengedAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => MfaChallengeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MfaChallengeListRelationFilter)
  @IsOptional()
  @Field(() => MfaChallengeListRelationFilter, {
    nullable: true,
  })
  mfaChallenges?: MfaChallengeListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phone?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  secret?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumMfaFactorStatus,
  })
  @IsEnum(EnumMfaFactorStatus)
  @IsOptional()
  @Field(() => EnumMfaFactorStatus, {
    nullable: true,
  })
  status?: "unverified" | "verified";

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  users?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  webAuthnAaguid?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  webAuthnCredential?: JsonFilter;
}

export { MfaFactorWhereInput as MfaFactorWhereInput };
