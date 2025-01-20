import { FlowState as TFlowState } from "../api/flowState/FlowState";

export const FLOWSTATE_TITLE_FIELD = "authCode";

export const FlowStateTitle = (record: TFlowState): string => {
  return record.authCode?.toString() || String(record.id);
};
