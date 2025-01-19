import { SalonService as TSalonService } from "../api/salonService/SalonService";

export const SALONSERVICE_TITLE_FIELD = "name";

export const SalonServiceTitle = (record: TSalonService): string => {
  return record.name?.toString() || String(record.id);
};
