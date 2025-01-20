import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  appointmentDate?: SortOrder;
  appointmentTime?: SortOrder;
  id?: SortOrder;
  barber_id?: SortOrder;
  user_id?: SortOrder;
};
