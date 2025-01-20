import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalonRatingLikeServiceBase } from "./base/salonRatingLike.service.base";

@Injectable()
export class SalonRatingLikeService extends SalonRatingLikeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
