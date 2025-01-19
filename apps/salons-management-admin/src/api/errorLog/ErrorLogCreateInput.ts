export type ErrorLogCreateInput = {
  errorContext?: string | null;
  errorDetail?: string | null;
  errorHint?: string | null;
  errorMessage?: string | null;
  functionName: string;
};
