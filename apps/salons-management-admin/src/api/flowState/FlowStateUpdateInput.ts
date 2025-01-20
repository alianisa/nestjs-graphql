import { SamlRelayStateUpdateManyWithoutFlowStatesInput } from "./SamlRelayStateUpdateManyWithoutFlowStatesInput";

export type FlowStateUpdateInput = {
  authCode?: string;
  authCodeIssuedAt?: Date | null;
  authenticationMethod?: string;
  codeChallenge?: string;
  code_challenge_method?: "s256" | "plain";
  createdAt?: Date | null;
  providerAccessToken?: string | null;
  providerRefreshToken?: string | null;
  providerType?: string;
  samlRelayStates?: SamlRelayStateUpdateManyWithoutFlowStatesInput;
  updatedAt?: Date | null;
  userId?: string | null;
};
