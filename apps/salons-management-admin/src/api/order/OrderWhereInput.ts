import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DepositListRelationFilter } from "../deposit/DepositListRelationFilter";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { EmployeeTaskListRelationFilter } from "../employeeTask/EmployeeTaskListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { LoyaltyTransactionListRelationFilter } from "../loyaltyTransaction/LoyaltyTransactionListRelationFilter";
import { OrderImageListRelationFilter } from "../orderImage/OrderImageListRelationFilter";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { PromocodeWhereUniqueInput } from "../promocode/PromocodeWhereUniqueInput";
import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";
import { QueueListRelationFilter } from "../queue/QueueListRelationFilter";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { DecimalFilter } from "../../util/DecimalFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";
import { UserRatingListRelationFilter } from "../userRating/UserRatingListRelationFilter";

export type OrderWhereInput = {
  amount?: DecimalNullableFilter;
  appointmentsAppointmentsOrderIdToorders?: AppointmentListRelationFilter;
  appointmentsOrdersAppointmentIdToappointments?: AppointmentWhereUniqueInput;
  canceled?: BooleanNullableFilter;
  canceledReason?: StringNullableFilter;
  completed?: BooleanNullableFilter;
  completedAt?: DateTimeNullableFilter;
  createdAt?: DateTimeFilter;
  depositAmount?: DecimalNullableFilter;
  deposits?: DepositListRelationFilter;
  discount?: DecimalNullableFilter;
  discountAmount?: DecimalNullableFilter;
  discounts?: DiscountWhereUniqueInput;
  employeeTasks?: EmployeeTaskListRelationFilter;
  id?: StringFilter;
  loyaltyPointsEarned?: IntNullableFilter;
  loyaltyPointsUsed?: IntNullableFilter;
  loyaltyTransactions?: LoyaltyTransactionListRelationFilter;
  orderImageId?: StringFilter;
  orderImages?: OrderImageListRelationFilter;
  orderNumber?: StringNullableFilter;
  order_type?: "appointment" | "queue";
  payments?: PaymentWhereUniqueInput;
  promocodes?: PromocodeWhereUniqueInput;
  queuesOrdersQueueIdToqueues?: QueueWhereUniqueInput;
  queuesQueuesOrderIdToorders?: QueueListRelationFilter;
  salons?: SalonWhereUniqueInput;
  services?: StringFilter;
  started?: BooleanNullableFilter;
  startedAt?: DateTimeNullableFilter;
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
  totalAmount?: DecimalFilter;
  transactions?: TransactionListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
  userProfilesOrdersEmployeeIdTouserProfiles?: UserProfileWhereUniqueInput;
  userProfilesOrdersUserIdTouserProfiles?: UserProfileWhereUniqueInput;
  userRatings?: UserRatingListRelationFilter;
};
