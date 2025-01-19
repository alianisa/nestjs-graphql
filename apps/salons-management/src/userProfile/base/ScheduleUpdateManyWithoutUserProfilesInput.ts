/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ScheduleWhereUniqueInput } from "../../schedule/base/ScheduleWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ScheduleUpdateManyWithoutUserProfilesInput {
  @Field(() => [ScheduleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScheduleWhereUniqueInput],
  })
  connect?: Array<ScheduleWhereUniqueInput>;

  @Field(() => [ScheduleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScheduleWhereUniqueInput],
  })
  disconnect?: Array<ScheduleWhereUniqueInput>;

  @Field(() => [ScheduleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScheduleWhereUniqueInput],
  })
  set?: Array<ScheduleWhereUniqueInput>;
}

export { ScheduleUpdateManyWithoutUserProfilesInput as ScheduleUpdateManyWithoutUserProfilesInput };
