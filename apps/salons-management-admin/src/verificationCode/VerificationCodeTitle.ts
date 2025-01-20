import { VerificationCode as TVerificationCode } from "../api/verificationCode/VerificationCode";

export const VERIFICATIONCODE_TITLE_FIELD = "code";

export const VerificationCodeTitle = (record: TVerificationCode): string => {
  return record.code?.toString() || String(record.id);
};
