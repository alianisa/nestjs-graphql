import { SalonCategoryWhereInput } from "./SalonCategoryWhereInput";
import { SalonCategoryOrderByInput } from "./SalonCategoryOrderByInput";

export type SalonCategoryFindManyArgs = {
  where?: SalonCategoryWhereInput;
  orderBy?: Array<SalonCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
