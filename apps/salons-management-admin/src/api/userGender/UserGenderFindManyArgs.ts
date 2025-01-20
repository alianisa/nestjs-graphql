import { UserGenderWhereInput } from "./UserGenderWhereInput";
import { UserGenderOrderByInput } from "./UserGenderOrderByInput";

export type UserGenderFindManyArgs = {
  where?: UserGenderWhereInput;
  orderBy?: Array<UserGenderOrderByInput>;
  skip?: number;
  take?: number;
};
