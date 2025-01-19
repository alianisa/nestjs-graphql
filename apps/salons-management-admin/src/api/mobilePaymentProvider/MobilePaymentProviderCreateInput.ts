import { PaymentCreateNestedManyWithoutMobilePaymentProvidersInput } from "./PaymentCreateNestedManyWithoutMobilePaymentProvidersInput";

export type MobilePaymentProviderCreateInput = {
  apiKey?: string | null;
  apiSecret?: string | null;
  isActive?: boolean | null;
  name: string;
  payments?: PaymentCreateNestedManyWithoutMobilePaymentProvidersInput;
  updatedAt?: Date | null;
};
