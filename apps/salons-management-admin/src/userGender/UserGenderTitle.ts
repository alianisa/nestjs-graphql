import { UserGender as TUserGender } from "../api/userGender/UserGender";

export const USERGENDER_TITLE_FIELD = "gender";

export const UserGenderTitle = (record: TUserGender): string => {
  return record.gender?.toString() || String(record.id);
};
