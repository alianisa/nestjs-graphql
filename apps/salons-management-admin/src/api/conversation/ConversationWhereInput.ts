import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type ConversationWhereInput = {
  chatId?: StringFilter;
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  typeField?: StringFilter;
};
