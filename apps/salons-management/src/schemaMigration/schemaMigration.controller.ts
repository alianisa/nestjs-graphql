import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SchemaMigrationService } from "./schemaMigration.service";
import { SchemaMigrationControllerBase } from "./base/schemaMigration.controller.base";

@swagger.ApiTags("schemaMigrations")
@common.Controller("schemaMigrations")
export class SchemaMigrationController extends SchemaMigrationControllerBase {
  constructor(protected readonly service: SchemaMigrationService) {
    super(service);
  }
}
