import { SamlProviderWhereInput } from "./SamlProviderWhereInput";
import { SamlProviderOrderByInput } from "./SamlProviderOrderByInput";

export type SamlProviderFindManyArgs = {
  where?: SamlProviderWhereInput;
  orderBy?: Array<SamlProviderOrderByInput>;
  skip?: number;
  take?: number;
};
