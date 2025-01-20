import { SortOrder } from "../../util/SortOrder";

export type SamlRelayStateOrderByInput = {
  createdAt?: SortOrder;
  flow_state_id?: SortOrder;
  forEmail?: SortOrder;
  id?: SortOrder;
  redirectTo?: SortOrder;
  requestId?: SortOrder;
  sso_provider_id?: SortOrder;
  updatedAt?: SortOrder;
};
