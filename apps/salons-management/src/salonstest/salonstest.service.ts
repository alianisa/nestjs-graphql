import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalonstestServiceBase } from "./base/salonstest.service.base";

@Injectable()
export class SalonstestService extends SalonstestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
