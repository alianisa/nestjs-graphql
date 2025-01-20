import { MfaAmrClaimUpdateManyWithoutSessionsInput } from "./MfaAmrClaimUpdateManyWithoutSessionsInput";
import { RefreshTokenUpdateManyWithoutSessionsInput } from "./RefreshTokenUpdateManyWithoutSessionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionUpdateInput = {
  aal?: "aal1" | "aal2" | "aal3" | null;
  createdAt?: Date | null;
  factorId?: string | null;
  ip?: string | null;
  mfaAmrClaims?: MfaAmrClaimUpdateManyWithoutSessionsInput;
  notAfter?: Date | null;
  refreshTokens?: RefreshTokenUpdateManyWithoutSessionsInput;
  refreshedAt?: Date | null;
  tag?: string | null;
  updatedAt?: Date | null;
  userAgent?: string | null;
  users?: UserWhereUniqueInput;
};
