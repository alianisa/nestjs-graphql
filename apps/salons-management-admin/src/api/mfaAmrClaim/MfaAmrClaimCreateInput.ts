import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type MfaAmrClaimCreateInput = {
  authenticationMethod: string;
  createdAt: Date;
  sessions: SessionWhereUniqueInput;
  updatedAt: Date;
};
