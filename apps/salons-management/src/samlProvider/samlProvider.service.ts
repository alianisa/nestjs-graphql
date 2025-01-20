import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SamlProviderServiceBase } from "./base/samlProvider.service.base";

@Injectable()
export class SamlProviderService extends SamlProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
