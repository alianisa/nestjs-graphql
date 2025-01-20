import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserFavoriteMasterServiceBase } from "./base/userFavoriteMaster.service.base";

@Injectable()
export class UserFavoriteMasterService extends UserFavoriteMasterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
