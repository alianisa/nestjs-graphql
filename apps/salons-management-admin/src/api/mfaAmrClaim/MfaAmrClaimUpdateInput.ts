import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type MfaAmrClaimUpdateInput = {
  authenticationMethod?: string;
  createdAt?: Date;
  sessions?: SessionWhereUniqueInput;
  updatedAt?: Date;
};
