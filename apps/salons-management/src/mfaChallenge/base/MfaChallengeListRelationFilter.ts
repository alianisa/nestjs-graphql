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
import { MfaChallengeWhereInput } from "./MfaChallengeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MfaChallengeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MfaChallengeWhereInput,
  })
  @ValidateNested()
  @Type(() => MfaChallengeWhereInput)
  @IsOptional()
  @Field(() => MfaChallengeWhereInput, {
    nullable: true,
  })
  every?: MfaChallengeWhereInput;

  @ApiProperty({
    required: false,
    type: () => MfaChallengeWhereInput,
  })
  @ValidateNested()
  @Type(() => MfaChallengeWhereInput)
  @IsOptional()
  @Field(() => MfaChallengeWhereInput, {
    nullable: true,
  })
  some?: MfaChallengeWhereInput;

  @ApiProperty({
    required: false,
    type: () => MfaChallengeWhereInput,
  })
  @ValidateNested()
  @Type(() => MfaChallengeWhereInput)
  @IsOptional()
  @Field(() => MfaChallengeWhereInput, {
    nullable: true,
  })
  none?: MfaChallengeWhereInput;
}
export { MfaChallengeListRelationFilter as MfaChallengeListRelationFilter };
