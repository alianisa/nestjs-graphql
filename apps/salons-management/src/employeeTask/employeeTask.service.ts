import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeTaskServiceBase } from "./base/employeeTask.service.base";

@Injectable()
export class EmployeeTaskService extends EmployeeTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
