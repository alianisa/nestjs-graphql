import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OneTimeTokenUpdateInput = {
  relatesTo?: string;
  tokenHash?: string;
  token_type?:
    | "confirmation_token"
    | "reauthentication_token"
    | "recovery_token"
    | "email_change_token_new"
    | "email_change_token_current"
    | "phone_change_token";
  users?: UserWhereUniqueInput;
};
