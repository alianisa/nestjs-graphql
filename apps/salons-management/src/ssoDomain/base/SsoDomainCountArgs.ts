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
import { SsoDomainWhereInput } from "./SsoDomainWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SsoDomainCountArgs {
  @ApiProperty({
    required: false,
    type: () => SsoDomainWhereInput,
  })
  @Field(() => SsoDomainWhereInput, { nullable: true })
  @Type(() => SsoDomainWhereInput)
  where?: SsoDomainWhereInput;
}

export { SsoDomainCountArgs as SsoDomainCountArgs };
