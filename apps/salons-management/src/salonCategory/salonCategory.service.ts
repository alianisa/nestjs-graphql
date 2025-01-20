import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalonCategoryServiceBase } from "./base/salonCategory.service.base";

@Injectable()
export class SalonCategoryService extends SalonCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
