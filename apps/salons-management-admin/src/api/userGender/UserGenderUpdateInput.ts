import { UserProfileUpdateManyWithoutUserGendersInput } from "./UserProfileUpdateManyWithoutUserGendersInput";

export type UserGenderUpdateInput = {
  gender?: string;
  userProfiles?: UserProfileUpdateManyWithoutUserGendersInput;
};
