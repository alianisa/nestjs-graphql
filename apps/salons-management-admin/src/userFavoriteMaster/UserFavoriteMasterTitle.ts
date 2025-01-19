import { UserFavoriteMaster as TUserFavoriteMaster } from "../api/userFavoriteMaster/UserFavoriteMaster";

export const USERFAVORITEMASTER_TITLE_FIELD = "id";

export const UserFavoriteMasterTitle = (
  record: TUserFavoriteMaster
): string => {
  return record.id?.toString() || String(record.id);
};
