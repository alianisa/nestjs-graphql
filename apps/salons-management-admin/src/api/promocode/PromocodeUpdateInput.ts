import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { OrderUpdateManyWithoutPromocodesInput } from "./OrderUpdateManyWithoutPromocodesInput";

export type PromocodeUpdateInput = {
  code?: string;
  discounts?: DiscountWhereUniqueInput | null;
  endDate?: Date | null;
  isActive?: boolean | null;
  orders?: OrderUpdateManyWithoutPromocodesInput;
  startDate?: Date | null;
  updatedAt?: Date | null;
  usageLimit?: number | null;
  usedCount?: number | null;
  userLimit?: number | null;
};
