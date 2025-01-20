import { User } from "../user/User";

export type OneTimeToken = {
  createdAt: Date;
  id: string;
  relatesTo: string;
  tokenHash: string;
  token_type?:
    | "confirmation_token"
    | "reauthentication_token"
    | "recovery_token"
    | "email_change_token_new"
    | "email_change_token_current"
    | "phone_change_token";
  updatedAt: Date;
  users?: User;
};
