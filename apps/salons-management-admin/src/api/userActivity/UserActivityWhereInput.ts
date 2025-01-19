import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UserActivityWhereInput = {
  activityDescription?: StringNullableFilter;
  activityName?: StringNullableFilter;
  activitySubText?: StringNullableFilter;
  activityTime?: StringNullableFilter;
  activityType?: StringNullableFilter;
  id?: StringFilter;
  otherUser?: StringNullableFilter;
  projectRef?: StringNullableFilter;
  readState?: BooleanNullableFilter;
  targetUserRef?: StringNullableFilter;
  taskRef?: StringNullableFilter;
  unreadByUser?: StringNullableFilter;
};
