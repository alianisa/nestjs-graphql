import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IdentityServiceBase } from "./base/identity.service.base";

@Injectable()
export class IdentityService extends IdentityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
