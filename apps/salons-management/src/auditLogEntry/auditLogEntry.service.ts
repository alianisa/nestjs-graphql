import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuditLogEntryServiceBase } from "./base/auditLogEntry.service.base";

@Injectable()
export class AuditLogEntryService extends AuditLogEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
