import { MfaAmrClaim } from "../mfaAmrClaim/MfaAmrClaim";
import { RefreshToken } from "../refreshToken/RefreshToken";
import { User } from "../user/User";

export type Session = {
  aal?: "aal1" | "aal2" | "aal3" | null;
  createdAt: Date | null;
  factorId: string | null;
  id: string;
  ip: string | null;
  mfaAmrClaims?: Array<MfaAmrClaim>;
  notAfter: Date | null;
  refreshTokens?: Array<RefreshToken>;
  refreshedAt: Date | null;
  tag: string | null;
  updatedAt: Date | null;
  userAgent: string | null;
  users?: User;
};
