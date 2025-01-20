import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OneTimeTokenServiceBase } from "./base/oneTimeToken.service.base";

@Injectable()
export class OneTimeTokenService extends OneTimeTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
