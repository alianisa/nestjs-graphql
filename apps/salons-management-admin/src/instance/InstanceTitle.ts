import { Instance as TInstance } from "../api/instance/Instance";

export const INSTANCE_TITLE_FIELD = "rawBaseConfig";

export const InstanceTitle = (record: TInstance): string => {
  return record.rawBaseConfig?.toString() || String(record.id);
};
