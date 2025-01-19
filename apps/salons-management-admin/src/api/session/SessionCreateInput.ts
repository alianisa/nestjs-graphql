import { MfaAmrClaimCreateNestedManyWithoutSessionsInput } from "./MfaAmrClaimCreateNestedManyWithoutSessionsInput";
import { RefreshTokenCreateNestedManyWithoutSessionsInput } from "./RefreshTokenCreateNestedManyWithoutSessionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionCreateInput = {
  aal?: "aal1" | "aal2" | "aal3" | null;
  createdAt?: Date | null;
  factorId?: string | null;
  ip?: string | null;
  mfaAmrClaims?: MfaAmrClaimCreateNestedManyWithoutSessionsInput;
  notAfter?: Date | null;
  refreshTokens?: RefreshTokenCreateNestedManyWithoutSessionsInput;
  refreshedAt?: Date | null;
  tag?: string | null;
  updatedAt?: Date | null;
  userAgent?: string | null;
  users: UserWhereUniqueInput;
};
