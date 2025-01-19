import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderImageUpdateInput = {
  imageUrl?: string;
  orders?: OrderWhereUniqueInput;
};
