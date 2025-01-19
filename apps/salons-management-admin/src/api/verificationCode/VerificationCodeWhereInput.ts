import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type VerificationCodeWhereInput = {
  attempts?: IntFilter;
  code?: StringFilter;
  createdAt?: DateTimeNullableFilter;
  expiresAt?: DateTimeFilter;
  id?: StringFilter;
  maxAttempts?: IntFilter;
  messageId?: StringNullableFilter;
  metadata?: JsonFilter;
  phone?: StringFilter;
  providerId?: StringFilter;
  status?: "pending" | "verified" | "expired" | "failed";
  updatedAt?: DateTimeNullableFilter;
  verification_type?: "sms" | "call";
  verifiedAt?: DateTimeNullableFilter;
};
