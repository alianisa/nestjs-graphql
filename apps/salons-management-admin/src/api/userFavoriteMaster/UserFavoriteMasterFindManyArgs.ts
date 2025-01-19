import { UserFavoriteMasterWhereInput } from "./UserFavoriteMasterWhereInput";
import { UserFavoriteMasterOrderByInput } from "./UserFavoriteMasterOrderByInput";

export type UserFavoriteMasterFindManyArgs = {
  where?: UserFavoriteMasterWhereInput;
  orderBy?: Array<UserFavoriteMasterOrderByInput>;
  skip?: number;
  take?: number;
};
