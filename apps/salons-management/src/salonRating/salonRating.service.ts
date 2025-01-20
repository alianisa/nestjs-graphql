import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalonRatingServiceBase } from "./base/salonRating.service.base";

@Injectable()
export class SalonRatingService extends SalonRatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
