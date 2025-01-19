import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ChatWhereInput = {
  id?: StringFilter;
  lastMessage?: StringNullableFilter;
  lastMessageTime?: DateTimeNullableFilter;
  userProfilesChatsUserATouserProfiles?: UserProfileWhereUniqueInput;
  userProfilesChatsUserBTouserProfiles?: UserProfileWhereUniqueInput;
  userProfilesChatsUsersTouserProfiles?: UserProfileWhereUniqueInput;
};
