import { Decimal } from "decimal.js";
import { OrderCreateNestedManyWithoutDiscountsInput } from "./OrderCreateNestedManyWithoutDiscountsInput";
import { PromocodeCreateNestedManyWithoutDiscountsInput } from "./PromocodeCreateNestedManyWithoutDiscountsInput";

export type DiscountCreateInput = {
  description?: string | null;
  discountType: string;
  endDate?: Date | null;
  isActive?: boolean | null;
  maxDiscountAmount?: Decimal | null;
  minOrderAmount?: Decimal | null;
  name: string;
  orders?: OrderCreateNestedManyWithoutDiscountsInput;
  promocodes?: PromocodeCreateNestedManyWithoutDiscountsInput;
  serviceCategories: string;
  startDate?: Date | null;
  updatedAt?: Date | null;
  usageLimit?: Decimal | null;
  userLimit?: Decimal | null;
  value: Decimal;
};
