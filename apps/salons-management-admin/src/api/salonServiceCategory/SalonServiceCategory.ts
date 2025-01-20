import { SalonService } from "../salonService/SalonService";

export type SalonServiceCategory = {
  id: string;
  name: string | null;
  salonServices?: Array<SalonService>;
};
