/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PromocodeWhereUniqueInput } from "../../promocode/base/PromocodeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PromocodeUpdateManyWithoutDiscountsInput {
  @Field(() => [PromocodeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PromocodeWhereUniqueInput],
  })
  connect?: Array<PromocodeWhereUniqueInput>;

  @Field(() => [PromocodeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PromocodeWhereUniqueInput],
  })
  disconnect?: Array<PromocodeWhereUniqueInput>;

  @Field(() => [PromocodeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PromocodeWhereUniqueInput],
  })
  set?: Array<PromocodeWhereUniqueInput>;
}

export { PromocodeUpdateManyWithoutDiscountsInput as PromocodeUpdateManyWithoutDiscountsInput };
