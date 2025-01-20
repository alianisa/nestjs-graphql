import { MobilePaymentProvider as TMobilePaymentProvider } from "../api/mobilePaymentProvider/MobilePaymentProvider";

export const MOBILEPAYMENTPROVIDER_TITLE_FIELD = "name";

export const MobilePaymentProviderTitle = (
  record: TMobilePaymentProvider
): string => {
  return record.name?.toString() || String(record.id);
};
