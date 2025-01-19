import { Decimal } from "decimal.js";
import { OrderUpdateManyWithoutDiscountsInput } from "./OrderUpdateManyWithoutDiscountsInput";
import { PromocodeUpdateManyWithoutDiscountsInput } from "./PromocodeUpdateManyWithoutDiscountsInput";

export type DiscountUpdateInput = {
  description?: string | null;
  discountType?: string;
  endDate?: Date | null;
  isActive?: boolean | null;
  maxDiscountAmount?: Decimal | null;
  minOrderAmount?: Decimal | null;
  name?: string;
  orders?: OrderUpdateManyWithoutDiscountsInput;
  promocodes?: PromocodeUpdateManyWithoutDiscountsInput;
  serviceCategories?: string;
  startDate?: Date | null;
  updatedAt?: Date | null;
  usageLimit?: Decimal | null;
  userLimit?: Decimal | null;
  value?: Decimal;
};
