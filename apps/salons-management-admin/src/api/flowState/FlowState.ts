import { SamlRelayState } from "../samlRelayState/SamlRelayState";

export type FlowState = {
  authCode: string;
  authCodeIssuedAt: Date | null;
  authenticationMethod: string;
  codeChallenge: string;
  code_challenge_method?: "s256" | "plain";
  createdAt: Date | null;
  id: string;
  providerAccessToken: string | null;
  providerRefreshToken: string | null;
  providerType: string;
  samlRelayStates?: Array<SamlRelayState>;
  updatedAt: Date | null;
  userId: string | null;
};
