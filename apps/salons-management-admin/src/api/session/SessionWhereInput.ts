import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MfaAmrClaimListRelationFilter } from "../mfaAmrClaim/MfaAmrClaimListRelationFilter";
import { RefreshTokenListRelationFilter } from "../refreshToken/RefreshTokenListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  aal?: "aal1" | "aal2" | "aal3";
  createdAt?: DateTimeNullableFilter;
  factorId?: StringNullableFilter;
  id?: StringFilter;
  ip?: StringNullableFilter;
  mfaAmrClaims?: MfaAmrClaimListRelationFilter;
  notAfter?: DateTimeNullableFilter;
  refreshTokens?: RefreshTokenListRelationFilter;
  refreshedAt?: DateTimeNullableFilter;
  tag?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  userAgent?: StringNullableFilter;
  users?: UserWhereUniqueInput;
};
