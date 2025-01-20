import { OrderImageWhereInput } from "./OrderImageWhereInput";
import { OrderImageOrderByInput } from "./OrderImageOrderByInput";

export type OrderImageFindManyArgs = {
  where?: OrderImageWhereInput;
  orderBy?: Array<OrderImageOrderByInput>;
  skip?: number;
  take?: number;
};
