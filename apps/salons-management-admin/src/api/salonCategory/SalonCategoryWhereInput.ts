import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SalonCategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
