import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeDailyStatServiceBase } from "./base/employeeDailyStat.service.base";

@Injectable()
export class EmployeeDailyStatService extends EmployeeDailyStatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
