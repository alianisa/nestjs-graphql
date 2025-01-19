import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MobilePaymentProviderServiceBase } from "./base/mobilePaymentProvider.service.base";

@Injectable()
export class MobilePaymentProviderService extends MobilePaymentProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
