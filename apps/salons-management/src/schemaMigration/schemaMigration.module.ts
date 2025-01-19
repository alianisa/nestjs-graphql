import { Module } from "@nestjs/common";
import { SchemaMigrationModuleBase } from "./base/schemaMigration.module.base";
import { SchemaMigrationService } from "./schemaMigration.service";
import { SchemaMigrationController } from "./schemaMigration.controller";
import { SchemaMigrationGrpcController } from "./schemaMigration.grpc.controller";
import { SchemaMigrationResolver } from "./schemaMigration.resolver";

@Module({
  imports: [SchemaMigrationModuleBase],
  controllers: [SchemaMigrationController, SchemaMigrationGrpcController],
  providers: [SchemaMigrationService, SchemaMigrationResolver],
  exports: [SchemaMigrationService],
})
export class SchemaMigrationModule {}
