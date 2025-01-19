import { UserFavoriteSalon as TUserFavoriteSalon } from "../api/userFavoriteSalon/UserFavoriteSalon";

export const USERFAVORITESALON_TITLE_FIELD = "id";

export const UserFavoriteSalonTitle = (record: TUserFavoriteSalon): string => {
  return record.id?.toString() || String(record.id);
};
