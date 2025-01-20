import { SalonAccountWhereInput } from "./SalonAccountWhereInput";
import { SalonAccountOrderByInput } from "./SalonAccountOrderByInput";

export type SalonAccountFindManyArgs = {
  where?: SalonAccountWhereInput;
  orderBy?: Array<SalonAccountOrderByInput>;
  skip?: number;
  take?: number;
};
