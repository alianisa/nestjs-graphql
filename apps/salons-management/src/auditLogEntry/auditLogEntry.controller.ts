import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuditLogEntryService } from "./auditLogEntry.service";
import { AuditLogEntryControllerBase } from "./base/auditLogEntry.controller.base";

@swagger.ApiTags("auditLogEntries")
@common.Controller("auditLogEntries")
export class AuditLogEntryController extends AuditLogEntryControllerBase {
  constructor(protected readonly service: AuditLogEntryService) {
    super(service);
  }
}
