import { JsonValue } from "type-fest";

export type Metric = {
  duration: number;
  id: string;
  metadata: JsonValue;
  success: boolean;
  timestamp: Date;
  typeField: string;
};
