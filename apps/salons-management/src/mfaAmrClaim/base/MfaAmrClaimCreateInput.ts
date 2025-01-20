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
import { IsString, MaxLength, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SessionWhereUniqueInput } from "../../session/base/SessionWhereUniqueInput";

@InputType()
class MfaAmrClaimCreateInput {
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
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => SessionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SessionWhereUniqueInput)
  @Field(() => SessionWhereUniqueInput)
  sessions!: SessionWhereUniqueInput;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { MfaAmrClaimCreateInput as MfaAmrClaimCreateInput };
