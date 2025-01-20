import { SalonRatingWhereInput } from "./SalonRatingWhereInput";
import { SalonRatingOrderByInput } from "./SalonRatingOrderByInput";

export type SalonRatingFindManyArgs = {
  where?: SalonRatingWhereInput;
  orderBy?: Array<SalonRatingOrderByInput>;
  skip?: number;
  take?: number;
};
