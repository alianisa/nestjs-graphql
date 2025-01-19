import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeWorkScheduleServiceBase } from "./base/employeeWorkSchedule.service.base";

@Injectable()
export class EmployeeWorkScheduleService extends EmployeeWorkScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
