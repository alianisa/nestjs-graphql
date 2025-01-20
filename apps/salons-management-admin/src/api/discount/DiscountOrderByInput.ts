import { SortOrder } from "../../util/SortOrder";

export type DiscountOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  discountType?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  maxDiscountAmount?: SortOrder;
  minOrderAmount?: SortOrder;
  name?: SortOrder;
  serviceCategories?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  usageLimit?: SortOrder;
  userLimit?: SortOrder;
  value?: SortOrder;
};
