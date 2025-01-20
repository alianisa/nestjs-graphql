/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EmployeeDailyStatWhereUniqueInput } from "../../employeeDailyStat/base/EmployeeDailyStatWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EmployeeDailyStatUpdateManyWithoutSalonsInput {
  @Field(() => [EmployeeDailyStatWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeDailyStatWhereUniqueInput],
  })
  connect?: Array<EmployeeDailyStatWhereUniqueInput>;

  @Field(() => [EmployeeDailyStatWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeDailyStatWhereUniqueInput],
  })
  disconnect?: Array<EmployeeDailyStatWhereUniqueInput>;

  @Field(() => [EmployeeDailyStatWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeDailyStatWhereUniqueInput],
  })
  set?: Array<EmployeeDailyStatWhereUniqueInput>;
}

export { EmployeeDailyStatUpdateManyWithoutSalonsInput as EmployeeDailyStatUpdateManyWithoutSalonsInput };
