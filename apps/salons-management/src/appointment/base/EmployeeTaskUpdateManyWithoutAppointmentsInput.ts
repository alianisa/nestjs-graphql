/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EmployeeTaskWhereUniqueInput } from "../../employeeTask/base/EmployeeTaskWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EmployeeTaskUpdateManyWithoutAppointmentsInput {
  @Field(() => [EmployeeTaskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeTaskWhereUniqueInput],
  })
  connect?: Array<EmployeeTaskWhereUniqueInput>;

  @Field(() => [EmployeeTaskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeTaskWhereUniqueInput],
  })
  disconnect?: Array<EmployeeTaskWhereUniqueInput>;

  @Field(() => [EmployeeTaskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmployeeTaskWhereUniqueInput],
  })
  set?: Array<EmployeeTaskWhereUniqueInput>;
}

export { EmployeeTaskUpdateManyWithoutAppointmentsInput as EmployeeTaskUpdateManyWithoutAppointmentsInput };
