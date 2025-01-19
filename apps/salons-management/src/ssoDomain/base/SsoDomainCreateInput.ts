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
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { SsoProviderWhereUniqueInput } from "../../ssoProvider/base/SsoProviderWhereUniqueInput";

@InputType()
class SsoDomainCreateInput {
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
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  domain!: string;

  @ApiProperty({
    required: true,
    type: () => SsoProviderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SsoProviderWhereUniqueInput)
  @Field(() => SsoProviderWhereUniqueInput)
  ssoProviders!: SsoProviderWhereUniqueInput;

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

export { SsoDomainCreateInput as SsoDomainCreateInput };
