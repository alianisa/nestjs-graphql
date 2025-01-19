import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FlowStateWhereUniqueInput } from "../flowState/FlowStateWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SsoProviderWhereUniqueInput } from "../ssoProvider/SsoProviderWhereUniqueInput";

export type SamlRelayStateWhereInput = {
  createdAt?: DateTimeNullableFilter;
  flowState?: FlowStateWhereUniqueInput;
  forEmail?: StringNullableFilter;
  id?: StringFilter;
  redirectTo?: StringNullableFilter;
  requestId?: StringFilter;
  ssoProviders?: SsoProviderWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
