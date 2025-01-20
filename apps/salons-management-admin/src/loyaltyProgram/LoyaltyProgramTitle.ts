import { LoyaltyProgram as TLoyaltyProgram } from "../api/loyaltyProgram/LoyaltyProgram";

export const LOYALTYPROGRAM_TITLE_FIELD = "name";

export const LoyaltyProgramTitle = (record: TLoyaltyProgram): string => {
  return record.name?.toString() || String(record.id);
};
