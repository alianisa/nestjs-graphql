import { SalonServiceCategoryWhereInput } from "./SalonServiceCategoryWhereInput";
import { SalonServiceCategoryOrderByInput } from "./SalonServiceCategoryOrderByInput";

export type SalonServiceCategoryFindManyArgs = {
  where?: SalonServiceCategoryWhereInput;
  orderBy?: Array<SalonServiceCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
