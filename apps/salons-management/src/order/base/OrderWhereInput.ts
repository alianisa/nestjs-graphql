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
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { AppointmentListRelationFilter } from "../../appointment/base/AppointmentListRelationFilter";
import { AppointmentWhereUniqueInput } from "../../appointment/base/AppointmentWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DepositListRelationFilter } from "../../deposit/base/DepositListRelationFilter";
import { DiscountWhereUniqueInput } from "../../discount/base/DiscountWhereUniqueInput";
import { EmployeeTaskListRelationFilter } from "../../employeeTask/base/EmployeeTaskListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { LoyaltyTransactionListRelationFilter } from "../../loyaltyTransaction/base/LoyaltyTransactionListRelationFilter";
import { OrderImageListRelationFilter } from "../../orderImage/base/OrderImageListRelationFilter";
import { EnumOrderOrderType } from "./EnumOrderOrderType";
import { PaymentWhereUniqueInput } from "../../payment/base/PaymentWhereUniqueInput";
import { PromocodeWhereUniqueInput } from "../../promocode/base/PromocodeWhereUniqueInput";
import { QueueWhereUniqueInput } from "../../queue/base/QueueWhereUniqueInput";
import { QueueListRelationFilter } from "../../queue/base/QueueListRelationFilter";
import { SalonWhereUniqueInput } from "../../salon/base/SalonWhereUniqueInput";
import { EnumOrderStatus } from "./EnumOrderStatus";
import { DecimalFilter } from "../../util/DecimalFilter";
import { TransactionListRelationFilter } from "../../transaction/base/TransactionListRelationFilter";
import { UserProfileWhereUniqueInput } from "../../userProfile/base/UserProfileWhereUniqueInput";
import { UserRatingListRelationFilter } from "../../userRating/base/UserRatingListRelationFilter";

@InputType()
class OrderWhereInput {
  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  amount?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    type: () => AppointmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AppointmentListRelationFilter)
  @IsOptional()
  @Field(() => AppointmentListRelationFilter, {
    nullable: true,
  })
  appointmentsAppointmentsOrderIdToorders?: AppointmentListRelationFilter;

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
  appointmentsOrdersAppointmentIdToappointments?: AppointmentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  canceled?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  canceledReason?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  completed?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  completedAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  depositAmount?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DepositListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DepositListRelationFilter)
  @IsOptional()
  @Field(() => DepositListRelationFilter, {
    nullable: true,
  })
  deposits?: DepositListRelationFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  discount?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  discountAmount?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DiscountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DiscountWhereUniqueInput)
  @IsOptional()
  @Field(() => DiscountWhereUniqueInput, {
    nullable: true,
  })
  discounts?: DiscountWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeTaskListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EmployeeTaskListRelationFilter)
  @IsOptional()
  @Field(() => EmployeeTaskListRelationFilter, {
    nullable: true,
  })
  employeeTasks?: EmployeeTaskListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  loyaltyPointsEarned?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  loyaltyPointsUsed?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => LoyaltyTransactionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LoyaltyTransactionListRelationFilter)
  @IsOptional()
  @Field(() => LoyaltyTransactionListRelationFilter, {
    nullable: true,
  })
  loyaltyTransactions?: LoyaltyTransactionListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  orderImageId?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => OrderImageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderImageListRelationFilter)
  @IsOptional()
  @Field(() => OrderImageListRelationFilter, {
    nullable: true,
  })
  orderImages?: OrderImageListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  orderNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumOrderOrderType,
  })
  @IsEnum(EnumOrderOrderType)
  @IsOptional()
  @Field(() => EnumOrderOrderType, {
    nullable: true,
  })
  order_type?: "appointment" | "queue";

  @ApiProperty({
    required: false,
    type: () => PaymentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentWhereUniqueInput, {
    nullable: true,
  })
  payments?: PaymentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PromocodeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PromocodeWhereUniqueInput)
  @IsOptional()
  @Field(() => PromocodeWhereUniqueInput, {
    nullable: true,
  })
  promocodes?: PromocodeWhereUniqueInput;

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
  queuesOrdersQueueIdToqueues?: QueueWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => QueueListRelationFilter,
  })
  @ValidateNested()
  @Type(() => QueueListRelationFilter)
  @IsOptional()
  @Field(() => QueueListRelationFilter, {
    nullable: true,
  })
  queuesQueuesOrderIdToorders?: QueueListRelationFilter;

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  services?: StringFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  started?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  startedAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @IsOptional()
  @Field(() => EnumOrderStatus, {
    nullable: true,
  })
  status?:
    | "CREATED"
    | "IN_TRANSIT"
    | "IN_QUEUE"
    | "APPOINTMENT"
    | "WAITING_FOR_MASTER"
    | "WITH_MASTER"
    | "CANCELLED_BY_USER"
    | "CANCELLED_BY_MASTER"
    | "IN_PROGRESS"
    | "IN_PAYMENT"
    | "PAID"
    | "COMPLETED";

  @ApiProperty({
    required: false,
    type: DecimalFilter,
  })
  @Type(() => DecimalFilter)
  @IsOptional()
  @Field(() => DecimalFilter, {
    nullable: true,
  })
  totalAmount?: DecimalFilter;

  @ApiProperty({
    required: false,
    type: () => TransactionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TransactionListRelationFilter)
  @IsOptional()
  @Field(() => TransactionListRelationFilter, {
    nullable: true,
  })
  transactions?: TransactionListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeNullableFilter;

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
  userProfilesOrdersEmployeeIdTouserProfiles?: UserProfileWhereUniqueInput;

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
  userProfilesOrdersUserIdTouserProfiles?: UserProfileWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserRatingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserRatingListRelationFilter)
  @IsOptional()
  @Field(() => UserRatingListRelationFilter, {
    nullable: true,
  })
  userRatings?: UserRatingListRelationFilter;
}

export { OrderWhereInput as OrderWhereInput };
