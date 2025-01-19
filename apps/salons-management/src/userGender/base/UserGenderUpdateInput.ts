/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { UserProfileUpdateManyWithoutUserGendersInput } from "./UserProfileUpdateManyWithoutUserGendersInput";
import { Type } from "class-transformer";

@InputType()
class UserGenderUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  gender?: string;

  @ApiProperty({
    required: false,
    type: () => UserProfileUpdateManyWithoutUserGendersInput,
  })
  @ValidateNested()
  @Type(() => UserProfileUpdateManyWithoutUserGendersInput)
  @IsOptional()
  @Field(() => UserProfileUpdateManyWithoutUserGendersInput, {
    nullable: true,
  })
  userProfiles?: UserProfileUpdateManyWithoutUserGendersInput;
}

export { UserGenderUpdateInput as UserGenderUpdateInput };
