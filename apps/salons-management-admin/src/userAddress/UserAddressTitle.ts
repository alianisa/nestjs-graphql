import { UserAddress as TUserAddress } from "../api/userAddress/UserAddress";

export const USERADDRESS_TITLE_FIELD = "name";

export const UserAddressTitle = (record: TUserAddress): string => {
  return record.name?.toString() || String(record.id);
};
