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
import { AppointmentCreateNestedManyWithoutTimeSlotsInput } from "./AppointmentCreateNestedManyWithoutTimeSlotsInput";
import { ValidateNested, IsOptional, IsDate, IsBoolean } from "class-validator";
import { Type } from "class-transformer";
import { SalonWhereUniqueInput } from "../../salon/base/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../../userProfile/base/UserProfileWhereUniqueInput";

@InputType()
class TimeSlotCreateInput {
  @ApiProperty({
    required: false,
    type: () => AppointmentCreateNestedManyWithoutTimeSlotsInput,
  })
  @ValidateNested()
  @Type(() => AppointmentCreateNestedManyWithoutTimeSlotsInput)
  @IsOptional()
  @Field(() => AppointmentCreateNestedManyWithoutTimeSlotsInput, {
    nullable: true,
  })
  appointments?: AppointmentCreateNestedManyWithoutTimeSlotsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endTime?: Date | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isAvailable?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => SalonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalonWhereUniqueInput)
  @IsOptional()
  @Field(() => SalonWhereUniqueInput, {
    nullable: true,
  })
  salons?: SalonWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  slotDate?: Date | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  slotTime!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startTime?: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserProfileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserProfileWhereUniqueInput)
  @IsOptional()
  @Field(() => UserProfileWhereUniqueInput, {
    nullable: true,
  })
  userProfiles?: UserProfileWhereUniqueInput | null;
}

export { TimeSlotCreateInput as TimeSlotCreateInput };
