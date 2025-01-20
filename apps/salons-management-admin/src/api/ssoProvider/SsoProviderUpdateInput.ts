import { SamlProviderUpdateManyWithoutSsoProvidersInput } from "./SamlProviderUpdateManyWithoutSsoProvidersInput";
import { SamlRelayStateUpdateManyWithoutSsoProvidersInput } from "./SamlRelayStateUpdateManyWithoutSsoProvidersInput";
import { SsoDomainUpdateManyWithoutSsoProvidersInput } from "./SsoDomainUpdateManyWithoutSsoProvidersInput";

export type SsoProviderUpdateInput = {
  createdAt?: Date | null;
  resourceId?: string | null;
  samlProviders?: SamlProviderUpdateManyWithoutSsoProvidersInput;
  samlRelayStates?: SamlRelayStateUpdateManyWithoutSsoProvidersInput;
  ssoDomains?: SsoDomainUpdateManyWithoutSsoProvidersInput;
  updatedAt?: Date | null;
};
