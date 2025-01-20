import { Session } from "../session/Session";

export type RefreshToken = {
  createdAt: Date | null;
  id: bigint;
  instanceId: string | null;
  parent: string | null;
  revoked: boolean | null;
  sessions?: Session | null;
  token: string | null;
  updatedAt: Date | null;
  userId: string | null;
};
