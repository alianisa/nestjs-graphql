import { MfaFactorWhereUniqueInput } from "../mfaFactor/MfaFactorWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type MfaChallengeUpdateInput = {
  createdAt?: Date;
  ipAddress?: string;
  mfaFactors?: MfaFactorWhereUniqueInput;
  otpCode?: string | null;
  verifiedAt?: Date | null;
  webAuthnSessionData?: InputJsonValue;
};
