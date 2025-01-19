import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserGenderServiceBase } from "./base/userGender.service.base";

@Injectable()
export class UserGenderService extends UserGenderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
