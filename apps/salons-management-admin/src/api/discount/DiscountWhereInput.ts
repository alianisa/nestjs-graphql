import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { PromocodeListRelationFilter } from "../promocode/PromocodeListRelationFilter";
import { DecimalFilter } from "../../util/DecimalFilter";

export type DiscountWhereInput = {
  createdAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  discountType?: StringFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  maxDiscountAmount?: DecimalNullableFilter;
  minOrderAmount?: DecimalNullableFilter;
  name?: StringFilter;
  orders?: OrderListRelationFilter;
  promocodes?: PromocodeListRelationFilter;
  serviceCategories?: StringFilter;
  startDate?: DateTimeNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  usageLimit?: DecimalNullableFilter;
  userLimit?: DecimalNullableFilter;
  value?: DecimalFilter;
};
