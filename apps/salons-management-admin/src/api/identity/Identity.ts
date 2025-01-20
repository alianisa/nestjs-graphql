import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Identity = {
  createdAt: Date | null;
  email: string | null;
  id: string;
  identityData: JsonValue;
  lastSignInAt: Date | null;
  provider: string;
  providerId: string;
  updatedAt: Date | null;
  users?: User;
};
