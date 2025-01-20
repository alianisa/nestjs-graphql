import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type LoyaltyProgramWhereInput = {
  createdAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  minPointsForRedemption?: IntNullableFilter;
  name?: StringFilter;
  pointsPerCurrency?: DecimalFilter;
  redemptionRate?: DecimalNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
