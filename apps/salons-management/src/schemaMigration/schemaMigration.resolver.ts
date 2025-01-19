import * as graphql from "@nestjs/graphql";
import { SchemaMigrationResolverBase } from "./base/schemaMigration.resolver.base";
import { SchemaMigration } from "./base/SchemaMigration";
import { SchemaMigrationService } from "./schemaMigration.service";

@graphql.Resolver(() => SchemaMigration)
export class SchemaMigrationResolver extends SchemaMigrationResolverBase {
  constructor(protected readonly service: SchemaMigrationService) {
    super(service);
  }
}
