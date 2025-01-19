import { SchemaMigration as TSchemaMigration } from "../api/schemaMigration/SchemaMigration";

export const SCHEMAMIGRATION_TITLE_FIELD = "id";

export const SchemaMigrationTitle = (record: TSchemaMigration): string => {
  return record.id?.toString() || String(record.id);
};
