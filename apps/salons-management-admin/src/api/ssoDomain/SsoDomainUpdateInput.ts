import { SsoProviderWhereUniqueInput } from "../ssoProvider/SsoProviderWhereUniqueInput";

export type SsoDomainUpdateInput = {
  createdAt?: Date | null;
  domain?: string;
  ssoProviders?: SsoProviderWhereUniqueInput;
  updatedAt?: Date | null;
};
