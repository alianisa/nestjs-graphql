import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SchemaMigrationServiceBase } from "./base/schemaMigration.service.base";

@Injectable()
export class SchemaMigrationService extends SchemaMigrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
