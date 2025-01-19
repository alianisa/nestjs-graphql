import { VerificationCodeWhereInput } from "./VerificationCodeWhereInput";
import { VerificationCodeOrderByInput } from "./VerificationCodeOrderByInput";

export type VerificationCodeFindManyArgs = {
  where?: VerificationCodeWhereInput;
  orderBy?: Array<VerificationCodeOrderByInput>;
  skip?: number;
  take?: number;
};
