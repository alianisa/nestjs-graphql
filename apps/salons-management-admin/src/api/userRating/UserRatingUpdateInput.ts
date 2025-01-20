import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { Decimal } from "decimal.js";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserRatingUpdateInput = {
  orders?: OrderWhereUniqueInput | null;
  rating?: Decimal;
  review?: string | null;
  userProfilesUserRatingsOwnerTouserProfiles?: UserProfileWhereUniqueInput;
  userProfilesUserRatingsUserIdTouserProfiles?: UserProfileWhereUniqueInput;
};
