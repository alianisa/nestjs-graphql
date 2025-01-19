import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SsoProviderWhereUniqueInput } from "../ssoProvider/SsoProviderWhereUniqueInput";

export type SamlProviderWhereInput = {
  attributeMapping?: JsonFilter;
  createdAt?: DateTimeNullableFilter;
  entityId?: StringFilter;
  id?: StringFilter;
  metadataUrl?: StringNullableFilter;
  metadataXml?: StringFilter;
  nameIdFormat?: StringNullableFilter;
  ssoProviders?: SsoProviderWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
