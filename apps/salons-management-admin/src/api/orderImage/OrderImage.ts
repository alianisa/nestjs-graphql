import { Order } from "../order/Order";

export type OrderImage = {
  createdAt: Date;
  id: string;
  imageUrl: string;
  orders?: Order;
};
