import { Metric as TMetric } from "../api/metric/Metric";

export const METRIC_TITLE_FIELD = "typeField";

export const MetricTitle = (record: TMetric): string => {
  return record.typeField?.toString() || String(record.id);
};
