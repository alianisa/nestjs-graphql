import { Discount } from "../discount/Discount";
import { Order } from "../order/Order";

export type Promocode = {
  code: string;
  createdAt: Date | null;
  discounts?: Discount | null;
  endDate: Date | null;
  id: string;
  isActive: boolean | null;
  orders?: Array<Order>;
  startDate: Date | null;
  updatedAt: Date | null;
  usageLimit: number | null;
  usedCount: number | null;
  userLimit: number | null;
};
