import { InputJsonValue } from "../../types";

export type MetricUpdateInput = {
  duration?: number;
  metadata?: InputJsonValue;
  success?: boolean;
  typeField?: string;
};
