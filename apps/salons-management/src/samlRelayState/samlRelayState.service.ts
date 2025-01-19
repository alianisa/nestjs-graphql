import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SamlRelayStateServiceBase } from "./base/samlRelayState.service.base";

@Injectable()
export class SamlRelayStateService extends SamlRelayStateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
