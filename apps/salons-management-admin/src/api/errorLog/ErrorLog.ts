export type ErrorLog = {
  createdAt: Date | null;
  errorContext: string | null;
  errorDetail: string | null;
  errorHint: string | null;
  errorMessage: string | null;
  functionName: string;
  id: string;
};
