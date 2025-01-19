import { SortOrder } from "../../util/SortOrder";

export type PayrollOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  employee_id?: SortOrder;
};
