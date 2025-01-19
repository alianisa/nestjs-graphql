import { Decimal } from "decimal.js";
import { AppointmentUpdateManyWithoutOrdersInput } from "./AppointmentUpdateManyWithoutOrdersInput";
import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";
import { DepositUpdateManyWithoutOrdersInput } from "./DepositUpdateManyWithoutOrdersInput";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { EmployeeTaskUpdateManyWithoutOrdersInput } from "./EmployeeTaskUpdateManyWithoutOrdersInput";
import { LoyaltyTransactionUpdateManyWithoutOrdersInput } from "./LoyaltyTransactionUpdateManyWithoutOrdersInput";
import { OrderImageUpdateManyWithoutOrdersInput } from "./OrderImageUpdateManyWithoutOrdersInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { PromocodeWhereUniqueInput } from "../promocode/PromocodeWhereUniqueInput";
import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";
import { QueueUpdateManyWithoutOrdersInput } from "./QueueUpdateManyWithoutOrdersInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { TransactionUpdateManyWithoutOrdersInput } from "./TransactionUpdateManyWithoutOrdersInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";
import { UserRatingUpdateManyWithoutOrdersInput } from "./UserRatingUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  amount?: Decimal | null;
  appointmentsAppointmentsOrderIdToorders?: AppointmentUpdateManyWithoutOrdersInput;
  appointmentsOrdersAppointmentIdToappointments?: AppointmentWhereUniqueInput | null;
  canceled?: boolean | null;
  canceledReason?: string | null;
  completed?: boolean | null;
  completedAt?: Date | null;
  depositAmount?: Decimal | null;
  deposits?: DepositUpdateManyWithoutOrdersInput;
  discount?: Decimal | null;
  discountAmount?: Decimal | null;
  discounts?: DiscountWhereUniqueInput | null;
  employeeTasks?: EmployeeTaskUpdateManyWithoutOrdersInput;
  loyaltyPointsEarned?: number | null;
  loyaltyPointsUsed?: number | null;
  loyaltyTransactions?: LoyaltyTransactionUpdateManyWithoutOrdersInput;
  orderImageId?: string;
  orderImages?: OrderImageUpdateManyWithoutOrdersInput;
  orderNumber?: string | null;
  order_type?: "appointment" | "queue" | null;
  payments?: PaymentWhereUniqueInput | null;
  promocodes?: PromocodeWhereUniqueInput | null;
  queuesOrdersQueueIdToqueues?: QueueWhereUniqueInput | null;
  queuesQueuesOrderIdToorders?: QueueUpdateManyWithoutOrdersInput;
  salons?: SalonWhereUniqueInput;
  services?: string;
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
  totalAmount?: Decimal;
  transactions?: TransactionUpdateManyWithoutOrdersInput;
  updatedAt?: Date | null;
  userProfilesOrdersEmployeeIdTouserProfiles?: UserProfileWhereUniqueInput;
  userProfilesOrdersUserIdTouserProfiles?: UserProfileWhereUniqueInput;
  userRatings?: UserRatingUpdateManyWithoutOrdersInput;
};
