import { InputJsonValue } from "../../types";
import { SsoProviderWhereUniqueInput } from "../ssoProvider/SsoProviderWhereUniqueInput";

export type SamlProviderUpdateInput = {
  attributeMapping?: InputJsonValue;
  createdAt?: Date | null;
  entityId?: string;
  metadataUrl?: string | null;
  metadataXml?: string;
  nameIdFormat?: string | null;
  ssoProviders?: SsoProviderWhereUniqueInput;
  updatedAt?: Date | null;
};
