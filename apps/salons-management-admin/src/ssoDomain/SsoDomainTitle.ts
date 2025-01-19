import { SsoDomain as TSsoDomain } from "../api/ssoDomain/SsoDomain";

export const SSODOMAIN_TITLE_FIELD = "domain";

export const SsoDomainTitle = (record: TSsoDomain): string => {
  return record.domain?.toString() || String(record.id);
};
