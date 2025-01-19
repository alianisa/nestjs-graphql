import { IdentityWhereInput } from "./IdentityWhereInput";
import { IdentityOrderByInput } from "./IdentityOrderByInput";

export type IdentityFindManyArgs = {
  where?: IdentityWhereInput;
  orderBy?: Array<IdentityOrderByInput>;
  skip?: number;
  take?: number;
};
