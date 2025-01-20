import { Module } from "@nestjs/common";
import { AuditLogEntryModuleBase } from "./base/auditLogEntry.module.base";
import { AuditLogEntryService } from "./auditLogEntry.service";
import { AuditLogEntryController } from "./auditLogEntry.controller";
import { AuditLogEntryGrpcController } from "./auditLogEntry.grpc.controller";
import { AuditLogEntryResolver } from "./auditLogEntry.resolver";

@Module({
  imports: [AuditLogEntryModuleBase],
  controllers: [AuditLogEntryController, AuditLogEntryGrpcController],
  providers: [AuditLogEntryService, AuditLogEntryResolver],
  exports: [AuditLogEntryService],
})
export class AuditLogEntryModule {}
