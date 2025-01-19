import { JsonValue } from "type-fest";

export type VerificationCode = {
  attempts: number;
  code: string;
  createdAt: Date | null;
  expiresAt: Date;
  id: string;
  maxAttempts: number;
  messageId: string | null;
  metadata: JsonValue;
  phone: string;
  providerId: string;
  status?: "pending" | "verified" | "expired" | "failed";
  updatedAt: Date | null;
  verification_type?: "sms" | "call";
  verifiedAt: Date | null;
};
