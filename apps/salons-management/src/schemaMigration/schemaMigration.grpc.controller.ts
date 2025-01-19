import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SchemaMigrationService } from "./schemaMigration.service";
import { SchemaMigrationGrpcControllerBase } from "./base/schemaMigration.grpc.controller.base";

@swagger.ApiTags("schemaMigrations")
@common.Controller("schemaMigrations")
export class SchemaMigrationGrpcController extends SchemaMigrationGrpcControllerBase {
  constructor(protected readonly service: SchemaMigrationService) {
    super(service);
  }
}
