import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalonServiceServiceBase } from "./base/salonService.service.base";

@Injectable()
export class SalonServiceService extends SalonServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
