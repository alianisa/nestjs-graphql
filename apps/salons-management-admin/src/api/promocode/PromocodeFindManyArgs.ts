import { PromocodeWhereInput } from "./PromocodeWhereInput";
import { PromocodeOrderByInput } from "./PromocodeOrderByInput";

export type PromocodeFindManyArgs = {
  where?: PromocodeWhereInput;
  orderBy?: Array<PromocodeOrderByInput>;
  skip?: number;
  take?: number;
};
