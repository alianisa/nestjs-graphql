/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SamlRelayStateWhereUniqueInput } from "../../samlRelayState/base/SamlRelayStateWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SamlRelayStateUpdateManyWithoutSsoProvidersInput {
  @Field(() => [SamlRelayStateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SamlRelayStateWhereUniqueInput],
  })
  connect?: Array<SamlRelayStateWhereUniqueInput>;

  @Field(() => [SamlRelayStateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SamlRelayStateWhereUniqueInput],
  })
  disconnect?: Array<SamlRelayStateWhereUniqueInput>;

  @Field(() => [SamlRelayStateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SamlRelayStateWhereUniqueInput],
  })
  set?: Array<SamlRelayStateWhereUniqueInput>;
}

export { SamlRelayStateUpdateManyWithoutSsoProvidersInput as SamlRelayStateUpdateManyWithoutSsoProvidersInput };
