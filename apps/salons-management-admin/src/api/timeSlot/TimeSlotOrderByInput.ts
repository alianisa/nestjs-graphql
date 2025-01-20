import { SortOrder } from "../../util/SortOrder";

export type TimeSlotOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  isAvailable?: SortOrder;
  salon_id?: SortOrder;
  slotDate?: SortOrder;
  slotTime?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
  employee_id?: SortOrder;
};
