import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RefreshTokenServiceBase } from "./base/refreshToken.service.base";

@Injectable()
export class RefreshTokenService extends RefreshTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
