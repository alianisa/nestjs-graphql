import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SsoProviderServiceBase } from "./base/ssoProvider.service.base";

@Injectable()
export class SsoProviderService extends SsoProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
