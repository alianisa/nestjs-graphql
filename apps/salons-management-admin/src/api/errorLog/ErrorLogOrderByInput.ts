import { SortOrder } from "../../util/SortOrder";

export type ErrorLogOrderByInput = {
  createdAt?: SortOrder;
  errorContext?: SortOrder;
  errorDetail?: SortOrder;
  errorHint?: SortOrder;
  errorMessage?: SortOrder;
  functionName?: SortOrder;
  id?: SortOrder;
};
