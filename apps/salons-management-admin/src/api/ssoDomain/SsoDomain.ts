import { SsoProvider } from "../ssoProvider/SsoProvider";

export type SsoDomain = {
  createdAt: Date | null;
  domain: string;
  id: string;
  ssoProviders?: SsoProvider;
  updatedAt: Date | null;
};
