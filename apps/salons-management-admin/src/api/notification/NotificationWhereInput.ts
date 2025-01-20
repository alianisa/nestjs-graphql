import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type NotificationWhereInput = {
  body?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  title?: StringFilter;
  userProfiles?: UserProfileWhereUniqueInput;
};
