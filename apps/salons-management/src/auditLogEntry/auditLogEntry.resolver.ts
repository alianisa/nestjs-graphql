import * as graphql from "@nestjs/graphql";
import { AuditLogEntryResolverBase } from "./base/auditLogEntry.resolver.base";
import { AuditLogEntry } from "./base/AuditLogEntry";
import { AuditLogEntryService } from "./auditLogEntry.service";

@graphql.Resolver(() => AuditLogEntry)
export class AuditLogEntryResolver extends AuditLogEntryResolverBase {
  constructor(protected readonly service: AuditLogEntryService) {
    super(service);
  }
}
