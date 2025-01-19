import { SchemaMigrationWhereInput } from "./SchemaMigrationWhereInput";
import { SchemaMigrationOrderByInput } from "./SchemaMigrationOrderByInput";

export type SchemaMigrationFindManyArgs = {
  where?: SchemaMigrationWhereInput;
  orderBy?: Array<SchemaMigrationOrderByInput>;
  skip?: number;
  take?: number;
};
