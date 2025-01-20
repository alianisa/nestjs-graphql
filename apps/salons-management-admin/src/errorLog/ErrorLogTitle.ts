import { ErrorLog as TErrorLog } from "../api/errorLog/ErrorLog";

export const ERRORLOG_TITLE_FIELD = "functionName";

export const ErrorLogTitle = (record: TErrorLog): string => {
  return record.functionName?.toString() || String(record.id);
};
