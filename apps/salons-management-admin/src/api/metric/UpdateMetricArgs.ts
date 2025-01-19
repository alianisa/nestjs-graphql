import { MetricWhereUniqueInput } from "./MetricWhereUniqueInput";
import { MetricUpdateInput } from "./MetricUpdateInput";

export type UpdateMetricArgs = {
  where: MetricWhereUniqueInput;
  data: MetricUpdateInput;
};
