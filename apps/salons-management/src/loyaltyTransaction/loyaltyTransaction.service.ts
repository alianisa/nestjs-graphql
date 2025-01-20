import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LoyaltyTransactionServiceBase } from "./base/loyaltyTransaction.service.base";

@Injectable()
export class LoyaltyTransactionService extends LoyaltyTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
