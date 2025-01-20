/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AuditLogEntry as PrismaAuditLogEntry } from "@prisma/client";

export class AuditLogEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AuditLogEntryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.auditLogEntry.count(args);
  }

  async auditLogEntries(
    args: Prisma.AuditLogEntryFindManyArgs
  ): Promise<PrismaAuditLogEntry[]> {
    return this.prisma.auditLogEntry.findMany(args);
  }
  async auditLogEntry(
    args: Prisma.AuditLogEntryFindUniqueArgs
  ): Promise<PrismaAuditLogEntry | null> {
    return this.prisma.auditLogEntry.findUnique(args);
  }
  async createAuditLogEntry(
    args: Prisma.AuditLogEntryCreateArgs
  ): Promise<PrismaAuditLogEntry> {
    return this.prisma.auditLogEntry.create(args);
  }
  async updateAuditLogEntry(
    args: Prisma.AuditLogEntryUpdateArgs
  ): Promise<PrismaAuditLogEntry> {
    return this.prisma.auditLogEntry.update(args);
  }
  async deleteAuditLogEntry(
    args: Prisma.AuditLogEntryDeleteArgs
  ): Promise<PrismaAuditLogEntry> {
    return this.prisma.auditLogEntry.delete(args);
  }
}
