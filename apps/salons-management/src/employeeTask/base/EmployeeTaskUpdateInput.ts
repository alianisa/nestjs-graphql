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
  IsInt,
  Max,
  IsOptional,
  IsDate,
  ValidateNested,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";

import { Type } from "class-transformer";
import { AppointmentWhereUniqueInput } from "../../appointment/base/AppointmentWhereUniqueInput";
import { EnumEmployeeTaskOrderType } from "./EnumEmployeeTaskOrderType";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { QueueWhereUniqueInput } from "../../queue/base/QueueWhereUniqueInput";
import { SalonWhereUniqueInput } from "../../salon/base/SalonWhereUniqueInput";
import { EnumEmployeeTaskTaskStatus } from "./EnumEmployeeTaskTaskStatus";
import { UserProfileWhereUniqueInput } from "../../userProfile/base/UserProfileWhereUniqueInput";

@InputType()
class EmployeeTaskUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  actualDuration?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  actualStartTime?: Date | null;

  @ApiProperty({
    required: false,
    type: () => AppointmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppointmentWhereUniqueInput)
  @IsOptional()
  @Field(() => AppointmentWhereUniqueInput, {
    nullable: true,
  })
  appointments?: AppointmentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  completedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  estimatedDuration?: number;

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
  notes?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumEmployeeTaskOrderType,
  })
  @IsEnum(EnumEmployeeTaskOrderType)
  @IsOptional()
  @Field(() => EnumEmployeeTaskOrderType, {
    nullable: true,
  })
  order_type?: "appointment" | "queue";

  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  orders?: OrderWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => QueueWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QueueWhereUniqueInput)
  @IsOptional()
  @Field(() => QueueWhereUniqueInput, {
    nullable: true,
  })
  queues?: QueueWhereUniqueInput | null;

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
  salons?: SalonWhereUniqueInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  scheduledStartTime?: Date;

  @ApiProperty({
    required: false,
    enum: EnumEmployeeTaskTaskStatus,
  })
  @IsEnum(EnumEmployeeTaskTaskStatus)
  @IsOptional()
  @Field(() => EnumEmployeeTaskTaskStatus, {
    nullable: true,
  })
  task_status?:
    | "NOT_STARTED"
    | "WITH_MASTER"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | null;

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
  userProfiles?: UserProfileWhereUniqueInput;
}

export { EmployeeTaskUpdateInput as EmployeeTaskUpdateInput };
