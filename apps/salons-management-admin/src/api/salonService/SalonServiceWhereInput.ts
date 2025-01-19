import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { SalonServiceCategoryWhereUniqueInput } from "../salonServiceCategory/SalonServiceCategoryWhereUniqueInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";

export type SalonServiceWhereInput = {
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  img?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: DecimalNullableFilter;
  salonServiceCategories?: SalonServiceCategoryWhereUniqueInput;
  salons?: SalonWhereUniqueInput;
};
