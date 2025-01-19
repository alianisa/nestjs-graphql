import { Session } from "../session/Session";

export type MfaAmrClaim = {
  authenticationMethod: string;
  createdAt: Date;
  id: string;
  sessions?: Session;
  updatedAt: Date;
};
