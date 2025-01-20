import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SsoProviderWhereUniqueInput } from "../ssoProvider/SsoProviderWhereUniqueInput";

export type SsoDomainWhereInput = {
  createdAt?: DateTimeNullableFilter;
  domain?: StringFilter;
  id?: StringFilter;
  ssoProviders?: SsoProviderWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
