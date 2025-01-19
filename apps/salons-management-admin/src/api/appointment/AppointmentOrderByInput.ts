import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  appointmentDate?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  order_id?: SortOrder;
  time_slot_id?: SortOrder;
  user_id?: SortOrder;
};
