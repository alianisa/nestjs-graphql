import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { MfaChallengeListRelationFilter } from "../mfaChallenge/MfaChallengeListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type MfaFactorWhereInput = {
  createdAt?: DateTimeFilter;
  factor_type?: "totp" | "webauthn" | "phone";
  friendlyName?: StringNullableFilter;
  id?: StringFilter;
  lastChallengedAt?: DateTimeNullableFilter;
  mfaChallenges?: MfaChallengeListRelationFilter;
  phone?: StringNullableFilter;
  secret?: StringNullableFilter;
  status?: "unverified" | "verified";
  updatedAt?: DateTimeFilter;
  users?: UserWhereUniqueInput;
  webAuthnAaguid?: StringNullableFilter;
  webAuthnCredential?: JsonFilter;
};
