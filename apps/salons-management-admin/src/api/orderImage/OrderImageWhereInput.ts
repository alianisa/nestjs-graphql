import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderImageWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  imageUrl?: StringFilter;
  orders?: OrderWhereUniqueInput;
};
