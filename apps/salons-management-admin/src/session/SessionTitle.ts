import { Session as TSession } from "../api/session/Session";

export const SESSION_TITLE_FIELD = "factorId";

export const SessionTitle = (record: TSession): string => {
  return record.factorId?.toString() || String(record.id);
};
