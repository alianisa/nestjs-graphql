import { OneTimeTokenWhereInput } from "./OneTimeTokenWhereInput";
import { OneTimeTokenOrderByInput } from "./OneTimeTokenOrderByInput";

export type OneTimeTokenFindManyArgs = {
  where?: OneTimeTokenWhereInput;
  orderBy?: Array<OneTimeTokenOrderByInput>;
  skip?: number;
  take?: number;
};
