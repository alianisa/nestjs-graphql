import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LoyaltyProgramServiceBase } from "./base/loyaltyProgram.service.base";

@Injectable()
export class LoyaltyProgramService extends LoyaltyProgramServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
