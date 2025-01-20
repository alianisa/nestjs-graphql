import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MfaFactorServiceBase } from "./base/mfaFactor.service.base";

@Injectable()
export class MfaFactorService extends MfaFactorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
