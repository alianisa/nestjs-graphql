import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderImageCreateInput = {
  imageUrl: string;
  orders: OrderWhereUniqueInput;
};
