import { SalonRatingLikeWhereInput } from "./SalonRatingLikeWhereInput";
import { SalonRatingLikeOrderByInput } from "./SalonRatingLikeOrderByInput";

export type SalonRatingLikeFindManyArgs = {
  where?: SalonRatingLikeWhereInput;
  orderBy?: Array<SalonRatingLikeOrderByInput>;
  skip?: number;
  take?: number;
};
