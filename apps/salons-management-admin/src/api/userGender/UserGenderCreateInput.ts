import { UserProfileCreateNestedManyWithoutUserGendersInput } from "./UserProfileCreateNestedManyWithoutUserGendersInput";

export type UserGenderCreateInput = {
  gender: string;
  userProfiles?: UserProfileCreateNestedManyWithoutUserGendersInput;
};
