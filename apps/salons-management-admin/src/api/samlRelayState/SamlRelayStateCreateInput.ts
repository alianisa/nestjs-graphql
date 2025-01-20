import { FlowStateWhereUniqueInput } from "../flowState/FlowStateWhereUniqueInput";
import { SsoProviderWhereUniqueInput } from "../ssoProvider/SsoProviderWhereUniqueInput";

export type SamlRelayStateCreateInput = {
  createdAt?: Date | null;
  flowState?: FlowStateWhereUniqueInput | null;
  forEmail?: string | null;
  redirectTo?: string | null;
  requestId: string;
  ssoProviders: SsoProviderWhereUniqueInput;
  updatedAt?: Date | null;
};
