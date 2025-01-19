import { UserAccountWhereInput } from "./UserAccountWhereInput";
import { UserAccountOrderByInput } from "./UserAccountOrderByInput";

export type UserAccountFindManyArgs = {
  where?: UserAccountWhereInput;
  orderBy?: Array<UserAccountOrderByInput>;
  skip?: number;
  take?: number;
};
