import { RefreshToken as TRefreshToken } from "../api/refreshToken/RefreshToken";

export const REFRESHTOKEN_TITLE_FIELD = "instanceId";

export const RefreshTokenTitle = (record: TRefreshToken): string => {
  return record.instanceId?.toString() || String(record.id);
};
