import { SsoProviderWhereUniqueInput } from "../ssoProvider/SsoProviderWhereUniqueInput";

export type SsoDomainCreateInput = {
  createdAt?: Date | null;
  domain: string;
  ssoProviders: SsoProviderWhereUniqueInput;
  updatedAt?: Date | null;
};
