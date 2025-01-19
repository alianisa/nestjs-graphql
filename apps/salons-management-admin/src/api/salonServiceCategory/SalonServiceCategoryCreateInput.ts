import { SalonServiceCreateNestedManyWithoutSalonServiceCategoriesInput } from "./SalonServiceCreateNestedManyWithoutSalonServiceCategoriesInput";

export type SalonServiceCategoryCreateInput = {
  name?: string | null;
  salonServices?: SalonServiceCreateNestedManyWithoutSalonServiceCategoriesInput;
};
