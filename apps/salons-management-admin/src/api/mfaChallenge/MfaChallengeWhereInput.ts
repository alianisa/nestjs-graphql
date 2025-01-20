import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { MfaFactorWhereUniqueInput } from "../mfaFactor/MfaFactorWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MfaChallengeWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  ipAddress?: StringFilter;
  mfaFactors?: MfaFactorWhereUniqueInput;
  otpCode?: StringNullableFilter;
  verifiedAt?: DateTimeNullableFilter;
  webAuthnSessionData?: JsonFilter;
};
