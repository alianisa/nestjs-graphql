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
  IsDate,
  IsOptional,
  ValidateNested,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { FlowStateWhereUniqueInput } from "../../flowState/base/FlowStateWhereUniqueInput";
import { SsoProviderWhereUniqueInput } from "../../ssoProvider/base/SsoProviderWhereUniqueInput";

@InputType()
class SamlRelayStateUpdateInput {
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
    type: () => FlowStateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FlowStateWhereUniqueInput)
  @IsOptional()
  @Field(() => FlowStateWhereUniqueInput, {
    nullable: true,
  })
  flowState?: FlowStateWhereUniqueInput | null;

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
  forEmail?: string | null;

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
  redirectTo?: string | null;

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
  requestId?: string;

  @ApiProperty({
    required: false,
    type: () => SsoProviderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SsoProviderWhereUniqueInput)
  @IsOptional()
  @Field(() => SsoProviderWhereUniqueInput, {
    nullable: true,
  })
  ssoProviders?: SsoProviderWhereUniqueInput;

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
}

export { SamlRelayStateUpdateInput as SamlRelayStateUpdateInput };
