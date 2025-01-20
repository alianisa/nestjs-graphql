import { SamlRelayStateCreateNestedManyWithoutFlowStatesInput } from "./SamlRelayStateCreateNestedManyWithoutFlowStatesInput";

export type FlowStateCreateInput = {
  authCode: string;
  authCodeIssuedAt?: Date | null;
  authenticationMethod: string;
  codeChallenge: string;
  code_challenge_method: "s256" | "plain";
  createdAt?: Date | null;
  providerAccessToken?: string | null;
  providerRefreshToken?: string | null;
  providerType: string;
  samlRelayStates?: SamlRelayStateCreateNestedManyWithoutFlowStatesInput;
  updatedAt?: Date | null;
  userId?: string | null;
};
