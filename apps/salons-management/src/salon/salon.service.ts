import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalonServiceBase } from "./base/salon.service.base";

@Injectable()
export class SalonService extends SalonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
