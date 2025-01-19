import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VerificationCodeServiceBase } from "./base/verificationCode.service.base";

@Injectable()
export class VerificationCodeService extends VerificationCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
