import { SalonServiceUpdateManyWithoutSalonServiceCategoriesInput } from "./SalonServiceUpdateManyWithoutSalonServiceCategoriesInput";

export type SalonServiceCategoryUpdateInput = {
  name?: string | null;
  salonServices?: SalonServiceUpdateManyWithoutSalonServiceCategoriesInput;
};
