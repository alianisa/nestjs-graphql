import { SortOrder } from "../../util/SortOrder";

export type VerificationCodeOrderByInput = {
  attempts?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  maxAttempts?: SortOrder;
  messageId?: SortOrder;
  metadata?: SortOrder;
  phone?: SortOrder;
  providerId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  verification_type?: SortOrder;
  verifiedAt?: SortOrder;
};
