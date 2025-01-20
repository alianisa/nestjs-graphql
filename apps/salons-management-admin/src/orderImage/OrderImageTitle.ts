import { OrderImage as TOrderImage } from "../api/orderImage/OrderImage";

export const ORDERIMAGE_TITLE_FIELD = "imageUrl";

export const OrderImageTitle = (record: TOrderImage): string => {
  return record.imageUrl?.toString() || String(record.id);
};
