import { SortOrder } from "../../util/SortOrder";

export type UserBankCardOrderByInput = {
  createdAt?: SortOrder;
  cvv?: SortOrder;
  expDate?: SortOrder;
  favorite?: SortOrder;
  id?: SortOrder;
  main?: SortOrder;
  name?: SortOrder;
  numberField?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
