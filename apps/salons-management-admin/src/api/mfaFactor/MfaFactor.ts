import { MfaChallenge } from "../mfaChallenge/MfaChallenge";
import { User } from "../user/User";
import { JsonValue } from "type-fest";

export type MfaFactor = {
  createdAt: Date;
  factor_type?: "totp" | "webauthn" | "phone";
  friendlyName: string | null;
  id: string;
  lastChallengedAt: Date | null;
  mfaChallenges?: Array<MfaChallenge>;
  phone: string | null;
  secret: string | null;
  status?: "unverified" | "verified";
  updatedAt: Date;
  users?: User;
  webAuthnAaguid: string | null;
  webAuthnCredential: JsonValue;
};
