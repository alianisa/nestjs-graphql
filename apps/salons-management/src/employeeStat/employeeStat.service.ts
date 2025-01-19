import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeStatServiceBase } from "./base/employeeStat.service.base";

@Injectable()
export class EmployeeStatService extends EmployeeStatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
