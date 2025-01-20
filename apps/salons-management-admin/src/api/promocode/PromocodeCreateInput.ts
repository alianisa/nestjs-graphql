import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { OrderCreateNestedManyWithoutPromocodesInput } from "./OrderCreateNestedManyWithoutPromocodesInput";

export type PromocodeCreateInput = {
  code: string;
  discounts?: DiscountWhereUniqueInput | null;
  endDate?: Date | null;
  isActive?: boolean | null;
  orders?: OrderCreateNestedManyWithoutPromocodesInput;
  startDate?: Date | null;
  updatedAt?: Date | null;
  usageLimit?: number | null;
  usedCount?: number | null;
  userLimit?: number | null;
};
