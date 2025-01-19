import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserRatingServiceBase } from "./base/userRating.service.base";

@Injectable()
export class UserRatingService extends UserRatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
