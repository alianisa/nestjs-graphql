import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type RefreshTokenUpdateInput = {
  createdAt?: Date | null;
  instanceId?: string | null;
  parent?: string | null;
  revoked?: boolean | null;
  sessions?: SessionWhereUniqueInput | null;
  token?: string | null;
  updatedAt?: Date | null;
  userId?: string | null;
};
