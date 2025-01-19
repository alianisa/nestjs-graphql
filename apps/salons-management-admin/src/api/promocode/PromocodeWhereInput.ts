import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PromocodeWhereInput = {
  code?: StringFilter;
  createdAt?: DateTimeNullableFilter;
  discounts?: DiscountWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  orders?: OrderListRelationFilter;
  startDate?: DateTimeNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  usageLimit?: IntNullableFilter;
  usedCount?: IntNullableFilter;
  userLimit?: IntNullableFilter;
};
