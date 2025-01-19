import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SalonServiceListRelationFilter } from "../salonService/SalonServiceListRelationFilter";

export type SalonServiceCategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  salonServices?: SalonServiceListRelationFilter;
};
