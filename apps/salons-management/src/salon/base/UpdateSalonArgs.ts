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
import { SalonWhereUniqueInput } from "./SalonWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SalonUpdateInput } from "./SalonUpdateInput";

@ArgsType()
class UpdateSalonArgs {
  @ApiProperty({
    required: true,
    type: () => SalonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalonWhereUniqueInput)
  @Field(() => SalonWhereUniqueInput, { nullable: false })
  where!: SalonWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SalonUpdateInput,
  })
  @ValidateNested()
  @Type(() => SalonUpdateInput)
  @Field(() => SalonUpdateInput, { nullable: false })
  data!: SalonUpdateInput;
}

export { UpdateSalonArgs as UpdateSalonArgs };
