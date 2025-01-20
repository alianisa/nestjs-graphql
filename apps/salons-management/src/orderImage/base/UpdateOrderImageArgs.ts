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
import { OrderImageWhereUniqueInput } from "./OrderImageWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrderImageUpdateInput } from "./OrderImageUpdateInput";

@ArgsType()
class UpdateOrderImageArgs {
  @ApiProperty({
    required: true,
    type: () => OrderImageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderImageWhereUniqueInput)
  @Field(() => OrderImageWhereUniqueInput, { nullable: false })
  where!: OrderImageWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrderImageUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrderImageUpdateInput)
  @Field(() => OrderImageUpdateInput, { nullable: false })
  data!: OrderImageUpdateInput;
}

export { UpdateOrderImageArgs as UpdateOrderImageArgs };
