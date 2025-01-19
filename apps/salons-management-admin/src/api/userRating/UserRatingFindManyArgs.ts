import { UserRatingWhereInput } from "./UserRatingWhereInput";
import { UserRatingOrderByInput } from "./UserRatingOrderByInput";

export type UserRatingFindManyArgs = {
  where?: UserRatingWhereInput;
  orderBy?: Array<UserRatingOrderByInput>;
  skip?: number;
  take?: number;
};
