import { SamlProviderCreateNestedManyWithoutSsoProvidersInput } from "./SamlProviderCreateNestedManyWithoutSsoProvidersInput";
import { SamlRelayStateCreateNestedManyWithoutSsoProvidersInput } from "./SamlRelayStateCreateNestedManyWithoutSsoProvidersInput";
import { SsoDomainCreateNestedManyWithoutSsoProvidersInput } from "./SsoDomainCreateNestedManyWithoutSsoProvidersInput";

export type SsoProviderCreateInput = {
  createdAt?: Date | null;
  resourceId?: string | null;
  samlProviders?: SamlProviderCreateNestedManyWithoutSsoProvidersInput;
  samlRelayStates?: SamlRelayStateCreateNestedManyWithoutSsoProvidersInput;
  ssoDomains?: SsoDomainCreateNestedManyWithoutSsoProvidersInput;
  updatedAt?: Date | null;
};
