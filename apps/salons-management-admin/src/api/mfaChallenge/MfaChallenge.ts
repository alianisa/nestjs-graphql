import { MfaFactor } from "../mfaFactor/MfaFactor";
import { JsonValue } from "type-fest";

export type MfaChallenge = {
  createdAt: Date;
  id: string;
  ipAddress: string;
  mfaFactors?: MfaFactor;
  otpCode: string | null;
  verifiedAt: Date | null;
  webAuthnSessionData: JsonValue;
};
