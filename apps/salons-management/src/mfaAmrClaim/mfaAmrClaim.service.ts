import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MfaAmrClaimServiceBase } from "./base/mfaAmrClaim.service.base";

@Injectable()
export class MfaAmrClaimService extends MfaAmrClaimServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
