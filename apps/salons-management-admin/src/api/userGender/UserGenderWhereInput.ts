import { StringFilter } from "../../util/StringFilter";
import { UserProfileListRelationFilter } from "../userProfile/UserProfileListRelationFilter";

export type UserGenderWhereInput = {
  gender?: StringFilter;
  id?: StringFilter;
  userProfiles?: UserProfileListRelationFilter;
};
