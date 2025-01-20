import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserAccountServiceBase } from "./base/userAccount.service.base";

@Injectable()
export class UserAccountService extends UserAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
