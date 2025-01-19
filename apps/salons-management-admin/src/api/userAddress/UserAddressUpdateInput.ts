import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserAddressUpdateInput = {
  description?: string | null;
  lat?: number | null;
  lng?: number | null;
  name?: string | null;
  updatedAt?: Date | null;
  userProfiles?: UserProfileWhereUniqueInput;
};
