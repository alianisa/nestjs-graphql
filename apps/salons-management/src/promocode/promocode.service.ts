import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PromocodeServiceBase } from "./base/promocode.service.base";

@Injectable()
export class PromocodeService extends PromocodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
