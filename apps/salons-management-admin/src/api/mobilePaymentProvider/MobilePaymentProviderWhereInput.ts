import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type MobilePaymentProviderWhereInput = {
  apiKey?: StringNullableFilter;
  apiSecret?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringFilter;
  payments?: PaymentListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
};
