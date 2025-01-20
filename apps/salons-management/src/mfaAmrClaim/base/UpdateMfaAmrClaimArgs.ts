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
import { MfaAmrClaimWhereUniqueInput } from "./MfaAmrClaimWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MfaAmrClaimUpdateInput } from "./MfaAmrClaimUpdateInput";

@ArgsType()
class UpdateMfaAmrClaimArgs {
  @ApiProperty({
    required: true,
    type: () => MfaAmrClaimWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MfaAmrClaimWhereUniqueInput)
  @Field(() => MfaAmrClaimWhereUniqueInput, { nullable: false })
  where!: MfaAmrClaimWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MfaAmrClaimUpdateInput,
  })
  @ValidateNested()
  @Type(() => MfaAmrClaimUpdateInput)
  @Field(() => MfaAmrClaimUpdateInput, { nullable: false })
  data!: MfaAmrClaimUpdateInput;
}

export { UpdateMfaAmrClaimArgs as UpdateMfaAmrClaimArgs };
