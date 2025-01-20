import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";

export type MfaAmrClaimWhereInput = {
  authenticationMethod?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  sessions?: SessionWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};
