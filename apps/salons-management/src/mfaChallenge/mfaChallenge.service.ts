import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MfaChallengeServiceBase } from "./base/mfaChallenge.service.base";

@Injectable()
export class MfaChallengeService extends MfaChallengeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
