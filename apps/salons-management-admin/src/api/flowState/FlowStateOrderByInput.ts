import { SortOrder } from "../../util/SortOrder";

export type FlowStateOrderByInput = {
  authCode?: SortOrder;
  authCodeIssuedAt?: SortOrder;
  authenticationMethod?: SortOrder;
  codeChallenge?: SortOrder;
  code_challenge_method?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  providerAccessToken?: SortOrder;
  providerRefreshToken?: SortOrder;
  providerType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
