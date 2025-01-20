import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuditLogEntryService } from "./auditLogEntry.service";
import { AuditLogEntryGrpcControllerBase } from "./base/auditLogEntry.grpc.controller.base";

@swagger.ApiTags("auditLogEntries")
@common.Controller("auditLogEntries")
export class AuditLogEntryGrpcController extends AuditLogEntryGrpcControllerBase {
  constructor(protected readonly service: AuditLogEntryService) {
    super(service);
  }
}
