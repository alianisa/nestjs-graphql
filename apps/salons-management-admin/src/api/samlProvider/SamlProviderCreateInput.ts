import { InputJsonValue } from "../../types";
import { SsoProviderWhereUniqueInput } from "../ssoProvider/SsoProviderWhereUniqueInput";

export type SamlProviderCreateInput = {
  attributeMapping?: InputJsonValue;
  createdAt?: Date | null;
  entityId: string;
  metadataUrl?: string | null;
  metadataXml: string;
  nameIdFormat?: string | null;
  ssoProviders: SsoProviderWhereUniqueInput;
  updatedAt?: Date | null;
};
