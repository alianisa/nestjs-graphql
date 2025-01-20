import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalonServiceCategoryServiceBase } from "./base/salonServiceCategory.service.base";

@Injectable()
export class SalonServiceCategoryService extends SalonServiceCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
