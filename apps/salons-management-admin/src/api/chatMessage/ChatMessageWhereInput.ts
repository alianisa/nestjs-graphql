import { ChatMessageWhereUniqueInput } from "./ChatMessageWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ChatMessageListRelationFilter } from "./ChatMessageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ChatMessageWhereInput = {
  chatMessages?: ChatMessageWhereUniqueInput;
  id?: StringFilter;
  otherChatMessages?: ChatMessageListRelationFilter;
  text?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userProfiles?: UserProfileWhereUniqueInput;
};
