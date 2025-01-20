import { SalonWhereUniqueInput } from "../salon/SalonWhereUniqueInput";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserFavoriteSalonUpdateInput = {
  createdAt?: Date;
  favorite?: boolean | null;
  salons?: SalonWhereUniqueInput;
  userProfiles?: UserProfileWhereUniqueInput | null;
};
