import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IdentityCreateInput = {
  createdAt?: Date | null;
  email?: string | null;
  identityData: InputJsonValue;
  lastSignInAt?: Date | null;
  provider: string;
  providerId: string;
  updatedAt?: Date | null;
  users: UserWhereUniqueInput;
};
