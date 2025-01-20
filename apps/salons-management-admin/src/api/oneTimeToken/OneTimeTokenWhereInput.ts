import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OneTimeTokenWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  relatesTo?: StringFilter;
  tokenHash?: StringFilter;
  token_type?:
    | "confirmation_token"
    | "reauthentication_token"
    | "recovery_token"
    | "email_change_token_new"
    | "email_change_token_current"
    | "phone_change_token";
  updatedAt?: DateTimeFilter;
  users?: UserWhereUniqueInput;
};
