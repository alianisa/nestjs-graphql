import { SsoProvider as TSsoProvider } from "../api/ssoProvider/SsoProvider";

export const SSOPROVIDER_TITLE_FIELD = "resourceId";

export const SsoProviderTitle = (record: TSsoProvider): string => {
  return record.resourceId?.toString() || String(record.id);
};
