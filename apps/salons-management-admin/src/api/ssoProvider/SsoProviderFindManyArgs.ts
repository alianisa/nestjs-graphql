import { SsoProviderWhereInput } from "./SsoProviderWhereInput";
import { SsoProviderOrderByInput } from "./SsoProviderOrderByInput";

export type SsoProviderFindManyArgs = {
  where?: SsoProviderWhereInput;
  orderBy?: Array<SsoProviderOrderByInput>;
  skip?: number;
  take?: number;
};
