import { PaymentUpdateManyWithoutMobilePaymentProvidersInput } from "./PaymentUpdateManyWithoutMobilePaymentProvidersInput";

export type MobilePaymentProviderUpdateInput = {
  apiKey?: string | null;
  apiSecret?: string | null;
  isActive?: boolean | null;
  name?: string;
  payments?: PaymentUpdateManyWithoutMobilePaymentProvidersInput;
  updatedAt?: Date | null;
};
