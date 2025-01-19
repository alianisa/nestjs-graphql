import { Salon as TSalon } from "../api/salon/Salon";

export const SALON_TITLE_FIELD = "name";

export const SalonTitle = (record: TSalon): string => {
  return record.name?.toString() || String(record.id);
};
