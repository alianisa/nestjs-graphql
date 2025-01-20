import { SamlProvider } from "../samlProvider/SamlProvider";
import { SamlRelayState } from "../samlRelayState/SamlRelayState";
import { SsoDomain } from "../ssoDomain/SsoDomain";

export type SsoProvider = {
  createdAt: Date | null;
  id: string;
  resourceId: string | null;
  samlProviders?: Array<SamlProvider>;
  samlRelayStates?: Array<SamlRelayState>;
  ssoDomains?: Array<SsoDomain>;
  updatedAt: Date | null;
};
