import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FlowStateServiceBase } from "./base/flowState.service.base";

@Injectable()
export class FlowStateService extends FlowStateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
