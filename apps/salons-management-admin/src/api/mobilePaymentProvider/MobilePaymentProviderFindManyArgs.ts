import { MobilePaymentProviderWhereInput } from "./MobilePaymentProviderWhereInput";
import { MobilePaymentProviderOrderByInput } from "./MobilePaymentProviderOrderByInput";

export type MobilePaymentProviderFindManyArgs = {
  where?: MobilePaymentProviderWhereInput;
  orderBy?: Array<MobilePaymentProviderOrderByInput>;
  skip?: number;
  take?: number;
};
