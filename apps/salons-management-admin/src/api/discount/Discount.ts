import { Decimal } from "decimal.js";
import { Order } from "../order/Order";
import { Promocode } from "../promocode/Promocode";

export type Discount = {
  createdAt: Date | null;
  description: string | null;
  discountType: string;
  endDate: Date | null;
  id: string;
  isActive: boolean | null;
  maxDiscountAmount: Decimal | null;
  minOrderAmount: Decimal | null;
  name: string;
  orders?: Array<Order>;
  promocodes?: Array<Promocode>;
  serviceCategories: string;
  startDate: Date | null;
  updatedAt: Date | null;
  usageLimit: Decimal | null;
  userLimit: Decimal | null;
  value: Decimal;
};
