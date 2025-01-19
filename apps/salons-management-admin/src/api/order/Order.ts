import { Decimal } from "decimal.js";
import { Appointment } from "../appointment/Appointment";
import { Deposit } from "../deposit/Deposit";
import { Discount } from "../discount/Discount";
import { EmployeeTask } from "../employeeTask/EmployeeTask";
import { LoyaltyTransaction } from "../loyaltyTransaction/LoyaltyTransaction";
import { OrderImage } from "../orderImage/OrderImage";
import { Payment } from "../payment/Payment";
import { Promocode } from "../promocode/Promocode";
import { Queue } from "../queue/Queue";
import { Salon } from "../salon/Salon";
import { Transaction } from "../transaction/Transaction";
import { UserProfile } from "../userProfile/UserProfile";
import { UserRating } from "../userRating/UserRating";

export type Order = {
  amount: Decimal | null;
  appointmentsAppointmentsOrderIdToorders?: Array<Appointment>;
  appointmentsOrdersAppointmentIdToappointments?: Appointment | null;
  canceled: boolean | null;
  canceledReason: string | null;
  completed: boolean | null;
  completedAt: Date | null;
  createdAt: Date;
  depositAmount: Decimal | null;
  deposits?: Array<Deposit>;
  discount: Decimal | null;
  discountAmount: Decimal | null;
  discounts?: Discount | null;
  employeeTasks?: Array<EmployeeTask>;
  id: string;
  loyaltyPointsEarned: number | null;
  loyaltyPointsUsed: number | null;
  loyaltyTransactions?: Array<LoyaltyTransaction>;
  orderImageId: string;
  orderImages?: Array<OrderImage>;
  orderNumber: string | null;
  order_type?: "appointment" | "queue" | null;
  payments?: Payment | null;
  promocodes?: Promocode | null;
  queuesOrdersQueueIdToqueues?: Queue | null;
  queuesQueuesOrderIdToorders?: Array<Queue>;
  salons?: Salon;
  services: string;
  started: boolean | null;
  startedAt: Date | null;
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
  transactions?: Array<Transaction>;
  updatedAt: Date | null;
  userProfilesOrdersEmployeeIdTouserProfiles?: UserProfile;
  userProfilesOrdersUserIdTouserProfiles?: UserProfile;
  userRatings?: Array<UserRating>;
};
