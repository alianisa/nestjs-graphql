import { LoyaltyProgramWhereInput } from "./LoyaltyProgramWhereInput";
import { LoyaltyProgramOrderByInput } from "./LoyaltyProgramOrderByInput";

export type LoyaltyProgramFindManyArgs = {
  where?: LoyaltyProgramWhereInput;
  orderBy?: Array<LoyaltyProgramOrderByInput>;
  skip?: number;
  take?: number;
};
