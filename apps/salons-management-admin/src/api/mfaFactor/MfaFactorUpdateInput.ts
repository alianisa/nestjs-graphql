import { MfaChallengeUpdateManyWithoutMfaFactorsInput } from "./MfaChallengeUpdateManyWithoutMfaFactorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type MfaFactorUpdateInput = {
  createdAt?: Date;
  factor_type?: "totp" | "webauthn" | "phone";
  friendlyName?: string | null;
  lastChallengedAt?: Date | null;
  mfaChallenges?: MfaChallengeUpdateManyWithoutMfaFactorsInput;
  phone?: string | null;
  secret?: string | null;
  status?: "unverified" | "verified";
  updatedAt?: Date;
  users?: UserWhereUniqueInput;
  webAuthnAaguid?: string | null;
  webAuthnCredential?: InputJsonValue;
};
