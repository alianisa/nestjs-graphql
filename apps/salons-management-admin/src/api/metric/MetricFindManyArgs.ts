import { MetricWhereInput } from "./MetricWhereInput";
import { MetricOrderByInput } from "./MetricOrderByInput";

export type MetricFindManyArgs = {
  where?: MetricWhereInput;
  orderBy?: Array<MetricOrderByInput>;
  skip?: number;
  take?: number;
};
