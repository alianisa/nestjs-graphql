import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderImageServiceBase } from "./base/orderImage.service.base";

@Injectable()
export class OrderImageService extends OrderImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
