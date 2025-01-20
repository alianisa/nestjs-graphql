import { UserBankCardWhereInput } from "./UserBankCardWhereInput";
import { UserBankCardOrderByInput } from "./UserBankCardOrderByInput";

export type UserBankCardFindManyArgs = {
  where?: UserBankCardWhereInput;
  orderBy?: Array<UserBankCardOrderByInput>;
  skip?: number;
  take?: number;
};
