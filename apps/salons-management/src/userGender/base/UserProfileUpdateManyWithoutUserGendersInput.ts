/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserProfileWhereUniqueInput } from "../../userProfile/base/UserProfileWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserProfileUpdateManyWithoutUserGendersInput {
  @Field(() => [UserProfileWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserProfileWhereUniqueInput],
  })
  connect?: Array<UserProfileWhereUniqueInput>;

  @Field(() => [UserProfileWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserProfileWhereUniqueInput],
  })
  disconnect?: Array<UserProfileWhereUniqueInput>;

  @Field(() => [UserProfileWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserProfileWhereUniqueInput],
  })
  set?: Array<UserProfileWhereUniqueInput>;
}

export { UserProfileUpdateManyWithoutUserGendersInput as UserProfileUpdateManyWithoutUserGendersInput };
