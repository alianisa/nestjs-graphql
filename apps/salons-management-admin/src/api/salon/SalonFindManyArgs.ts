import { SalonWhereInput } from "./SalonWhereInput";
import { SalonOrderByInput } from "./SalonOrderByInput";

export type SalonFindManyArgs = {
  where?: SalonWhereInput;
  orderBy?: Array<SalonOrderByInput>;
  skip?: number;
  take?: number;
};
