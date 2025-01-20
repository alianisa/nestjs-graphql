import { InputJsonValue } from "../../types";

export type VerificationCodeUpdateInput = {
  attempts?: number;
  code?: string;
  expiresAt?: Date;
  maxAttempts?: number;
  messageId?: string | null;
  metadata?: InputJsonValue;
  phone?: string;
  providerId?: string;
  status?: "pending" | "verified" | "expired" | "failed";
  verification_type?: "sms" | "call";
  verifiedAt?: Date | null;
};
