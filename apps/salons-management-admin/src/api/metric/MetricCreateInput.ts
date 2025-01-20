import { InputJsonValue } from "../../types";

export type MetricCreateInput = {
  duration: number;
  metadata?: InputJsonValue;
  success: boolean;
  typeField: string;
};
