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
  IsDate,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumFlowStateCodeChallengeMethod } from "./EnumFlowStateCodeChallengeMethod";
import { SamlRelayStateCreateNestedManyWithoutFlowStatesInput } from "./SamlRelayStateCreateNestedManyWithoutFlowStatesInput";

@InputType()
class FlowStateCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  authCode!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  authCodeIssuedAt?: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  authenticationMethod!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  codeChallenge!: string;

  @ApiProperty({
    required: true,
    enum: EnumFlowStateCodeChallengeMethod,
  })
  @IsEnum(EnumFlowStateCodeChallengeMethod)
  @Field(() => EnumFlowStateCodeChallengeMethod)
  code_challenge_method!: "s256" | "plain";

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt?: Date | null;

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
  providerAccessToken?: string | null;

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
  providerRefreshToken?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  providerType!: string;

  @ApiProperty({
    required: false,
    type: () => SamlRelayStateCreateNestedManyWithoutFlowStatesInput,
  })
  @ValidateNested()
  @Type(() => SamlRelayStateCreateNestedManyWithoutFlowStatesInput)
  @IsOptional()
  @Field(() => SamlRelayStateCreateNestedManyWithoutFlowStatesInput, {
    nullable: true,
  })
  samlRelayStates?: SamlRelayStateCreateNestedManyWithoutFlowStatesInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | null;

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
  userId?: string | null;
}

export { FlowStateCreateInput as FlowStateCreateInput };
