import { Salonstest as TSalonstest } from "../api/salonstest/Salonstest";

export const SALONSTEST_TITLE_FIELD = "name";

export const SalonstestTitle = (record: TSalonstest): string => {
  return record.name?.toString() || String(record.id);
};
