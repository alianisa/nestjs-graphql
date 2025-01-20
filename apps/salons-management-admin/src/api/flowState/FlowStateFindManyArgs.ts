import { FlowStateWhereInput } from "./FlowStateWhereInput";
import { FlowStateOrderByInput } from "./FlowStateOrderByInput";

export type FlowStateFindManyArgs = {
  where?: FlowStateWhereInput;
  orderBy?: Array<FlowStateOrderByInput>;
  skip?: number;
  take?: number;
};
