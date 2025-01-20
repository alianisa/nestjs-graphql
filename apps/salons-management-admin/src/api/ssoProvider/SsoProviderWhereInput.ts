import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SamlProviderListRelationFilter } from "../samlProvider/SamlProviderListRelationFilter";
import { SamlRelayStateListRelationFilter } from "../samlRelayState/SamlRelayStateListRelationFilter";
import { SsoDomainListRelationFilter } from "../ssoDomain/SsoDomainListRelationFilter";

export type SsoProviderWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  resourceId?: StringNullableFilter;
  samlProviders?: SamlProviderListRelationFilter;
  samlRelayStates?: SamlRelayStateListRelationFilter;
  ssoDomains?: SsoDomainListRelationFilter;
  updatedAt?: DateTimeNullableFilter;
};
