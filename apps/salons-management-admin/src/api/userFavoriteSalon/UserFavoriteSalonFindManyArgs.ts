import { UserFavoriteSalonWhereInput } from "./UserFavoriteSalonWhereInput";
import { UserFavoriteSalonOrderByInput } from "./UserFavoriteSalonOrderByInput";

export type UserFavoriteSalonFindManyArgs = {
  where?: UserFavoriteSalonWhereInput;
  orderBy?: Array<UserFavoriteSalonOrderByInput>;
  skip?: number;
  take?: number;
};
