import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SamlRelayStateListRelationFilter } from "../samlRelayState/SamlRelayStateListRelationFilter";

export type FlowStateWhereInput = {
  authCode?: StringFilter;
  authCodeIssuedAt?: DateTimeNullableFilter;
  authenticationMethod?: StringFilter;
  codeChallenge?: StringFilter;
  code_challenge_method?: "s256" | "plain";
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  providerAccessToken?: StringNullableFilter;
  providerRefreshToken?: StringNullableFilter;
  providerType?: StringFilter;
  samlRelayStates?: SamlRelayStateListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};
