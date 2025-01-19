import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SsoDomainServiceBase } from "./base/ssoDomain.service.base";

@Injectable()
export class SsoDomainService extends SsoDomainServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
