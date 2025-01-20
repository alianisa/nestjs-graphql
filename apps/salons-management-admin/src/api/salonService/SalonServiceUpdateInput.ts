import { Decimal } from "decimal.js";
import { SalonServiceCategoryWhereUniqueInput } from "../salonServiceCategory/SalonServiceCategoryWhereUniqueInput";
import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";

export type SalonServiceUpdateInput = {
  description?: string | null;
  duration?: number | null;
  img?: string | null;
  name?: string | null;
  price?: Decimal | null;
  salonServiceCategories?: SalonServiceCategoryWhereUniqueInput | null;
  salons?: SalonWhereUniqueInput | null;
};
