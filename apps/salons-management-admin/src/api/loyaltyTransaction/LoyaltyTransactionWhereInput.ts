import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type LoyaltyTransactionWhereInput = {
  createdAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  orders?: OrderWhereUniqueInput;
  pointsEarned?: IntNullableFilter;
  pointsSpent?: IntNullableFilter;
  transactionType?: StringFilter;
  userProfiles?: UserProfileWhereUniqueInput;
};
