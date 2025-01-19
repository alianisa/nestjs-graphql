import { Decimal } from "decimal.js";
import { SalonServiceCategory } from "../salonServiceCategory/SalonServiceCategory";
import { Salon } from "../salon/Salon";

export type SalonService = {
  description: string | null;
  duration: number | null;
  id: string;
  img: string | null;
  name: string | null;
  price: Decimal | null;
  salonServiceCategories?: SalonServiceCategory | null;
  salons?: Salon | null;
};
