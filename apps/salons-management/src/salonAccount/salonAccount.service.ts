import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalonAccountServiceBase } from "./base/salonAccount.service.base";

@Injectable()
export class SalonAccountService extends SalonAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
