import { SalonServiceWhereInput } from "./SalonServiceWhereInput";
import { SalonServiceOrderByInput } from "./SalonServiceOrderByInput";

export type SalonServiceFindManyArgs = {
  where?: SalonServiceWhereInput;
  orderBy?: Array<SalonServiceOrderByInput>;
  skip?: number;
  take?: number;
};
