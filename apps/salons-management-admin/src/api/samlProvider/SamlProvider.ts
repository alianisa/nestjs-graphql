import { JsonValue } from "type-fest";
import { SsoProvider } from "../ssoProvider/SsoProvider";

export type SamlProvider = {
  attributeMapping: JsonValue;
  createdAt: Date | null;
  entityId: string;
  id: string;
  metadataUrl: string | null;
  metadataXml: string;
  nameIdFormat: string | null;
  ssoProviders?: SsoProvider;
  updatedAt: Date | null;
};
