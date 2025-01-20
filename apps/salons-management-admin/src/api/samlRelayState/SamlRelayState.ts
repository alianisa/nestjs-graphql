import { FlowState } from "../flowState/FlowState";
import { SsoProvider } from "../ssoProvider/SsoProvider";

export type SamlRelayState = {
  createdAt: Date | null;
  flowState?: FlowState | null;
  forEmail: string | null;
  id: string;
  redirectTo: string | null;
  requestId: string;
  ssoProviders?: SsoProvider;
  updatedAt: Date | null;
};
