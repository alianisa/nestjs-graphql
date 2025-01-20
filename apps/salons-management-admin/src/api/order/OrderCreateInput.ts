import { Decimal } from "decimal.js";
import { AppointmentCreateNestedManyWithoutOrdersInput } from "./AppointmentCreateNestedManyWithoutOrdersInput";
import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { DepositCreateNestedManyWithoutOrdersInput } from "./DepositCreateNestedManyWithoutOrdersInput";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { EmployeeTaskCreateNestedManyWithoutOrdersInput } from "./EmployeeTaskCreateNestedManyWithoutOrdersInput";
import { LoyaltyTransactionCreateNestedManyWithoutOrdersInput } from "./LoyaltyTransactionCreateNestedManyWithoutOrdersInput";
import { OrderImageCreateNestedManyWithoutOrdersInput } from "./OrderImageCreateNestedManyWithoutOrdersInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { PromocodeWhereUniqueInput } from "../promocode/PromocodeWhereUniqueInput";
import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";
import { QueueCreateNestedManyWithoutOrdersInput } from "./QueueCreateNestedManyWithoutOrdersInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { TransactionCreateNestedManyWithoutOrdersInput } from "./TransactionCreateNestedManyWithoutOrdersInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";
import { UserRatingCreateNestedManyWithoutOrdersInput } from "./UserRatingCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  amount?: Decimal | null;
  appointmentsAppointmentsOrderIdToorders?: AppointmentCreateNestedManyWithoutOrdersInput;
  appointmentsOrdersAppointmentIdToappointments?: AppointmentWhereUniqueInput | null;
  canceled?: boolean | null;
  canceledReason?: string | null;
  completed?: boolean | null;
  completedAt?: Date | null;
  depositAmount?: Decimal | null;
  deposits?: DepositCreateNestedManyWithoutOrdersInput;
  discount?: Decimal | null;
  discountAmount?: Decimal | null;
  discounts?: DiscountWhereUniqueInput | null;
  employeeTasks?: EmployeeTaskCreateNestedManyWithoutOrdersInput;
  loyaltyPointsEarned?: number | null;
  loyaltyPointsUsed?: number | null;
  loyaltyTransactions?: LoyaltyTransactionCreateNestedManyWithoutOrdersInput;
  orderImageId: string;
  orderImages?: OrderImageCreateNestedManyWithoutOrdersInput;
  orderNumber?: string | null;
  order_type?: "appointment" | "queue" | null;
  payments?: PaymentWhereUniqueInput | null;
  promocodes?: PromocodeWhereUniqueInput | null;
  queuesOrdersQueueIdToqueues?: QueueWhereUniqueInput | null;
  queuesQueuesOrderIdToorders?: QueueCreateNestedManyWithoutOrdersInput;
  salons: SalonWhereUniqueInput;
  services: string;
  started?: boolean | null;
  startedAt?: Date | null;
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
    | "COMPLETED"
    | null;
  totalAmount: Decimal;
  transactions?: TransactionCreateNestedManyWithoutOrdersInput;
  updatedAt?: Date | null;
  userProfilesOrdersEmployeeIdTouserProfiles: UserProfileWhereUniqueInput;
  userProfilesOrdersUserIdTouserProfiles: UserProfileWhereUniqueInput;
  userRatings?: UserRatingCreateNestedManyWithoutOrdersInput;
};
