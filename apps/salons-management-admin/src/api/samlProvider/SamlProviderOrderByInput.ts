import { SortOrder } from "../../util/SortOrder";

export type SamlProviderOrderByInput = {
  attributeMapping?: SortOrder;
  createdAt?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  metadataUrl?: SortOrder;
  metadataXml?: SortOrder;
  nameIdFormat?: SortOrder;
  sso_provider_id?: SortOrder;
  updatedAt?: SortOrder;
};
