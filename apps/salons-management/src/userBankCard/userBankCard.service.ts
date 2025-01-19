import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserBankCardServiceBase } from "./base/userBankCard.service.base";

@Injectable()
export class UserBankCardService extends UserBankCardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
