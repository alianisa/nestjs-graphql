import { Appointment } from "../appointment/Appointment";

export enum EnumOrderStatus {
  Created = "CREATED",
  InTransit = "IN_TRANSIT",
  InQueue = "IN_QUEUE",
  Appointment = "APPOINTMENT",
  WaitingForMaster = "WAITING_FOR_MASTER",
  WithMaster = "WITH_MASTER",
  CancelledByUser = "CANCELLED_BY_USER",
  CancelledByMaster = "CANCELLED_BY_MASTER",
  InProgress = "IN_PROGRESS",
  InPayment = "IN_PAYMENT",
  Paid = "PAID",
  Completed = "COMPLETED",
}
