import { SortOrder } from "../../util/SortOrder";

export type TemplateOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  locale?: SortOrder;
  metadata?: SortOrder;
  name?: SortOrder;
  template?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
  variables?: SortOrder;
};
