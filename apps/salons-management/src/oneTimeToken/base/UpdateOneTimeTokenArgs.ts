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
import { OneTimeTokenWhereUniqueInput } from "./OneTimeTokenWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OneTimeTokenUpdateInput } from "./OneTimeTokenUpdateInput";

@ArgsType()
class UpdateOneTimeTokenArgs {
  @ApiProperty({
    required: true,
    type: () => OneTimeTokenWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OneTimeTokenWhereUniqueInput)
  @Field(() => OneTimeTokenWhereUniqueInput, { nullable: false })
  where!: OneTimeTokenWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OneTimeTokenUpdateInput,
  })
  @ValidateNested()
  @Type(() => OneTimeTokenUpdateInput)
  @Field(() => OneTimeTokenUpdateInput, { nullable: false })
  data!: OneTimeTokenUpdateInput;
}

export { UpdateOneTimeTokenArgs as UpdateOneTimeTokenArgs };
