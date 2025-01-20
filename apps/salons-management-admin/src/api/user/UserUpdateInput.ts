import { InputJsonValue } from "../../types";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userProfiles?: UserProfileWhereUniqueInput | null;
  username?: string;
};
