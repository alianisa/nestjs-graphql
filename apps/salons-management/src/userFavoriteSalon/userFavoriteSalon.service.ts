import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserFavoriteSalonServiceBase } from "./base/userFavoriteSalon.service.base";

@Injectable()
export class UserFavoriteSalonService extends UserFavoriteSalonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
