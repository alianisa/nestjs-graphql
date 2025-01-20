/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  EmployeeStat as PrismaEmployeeStat,
  Salon as PrismaSalon,
  UserProfile as PrismaUserProfile,
} from "@prisma/client";

export class EmployeeStatServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EmployeeStatCountArgs, "select">
  ): Promise<number> {
    return this.prisma.employeeStat.count(args);
  }

  async employeeStats(
    args: Prisma.EmployeeStatFindManyArgs
  ): Promise<PrismaEmployeeStat[]> {
    return this.prisma.employeeStat.findMany(args);
  }
  async employeeStat(
    args: Prisma.EmployeeStatFindUniqueArgs
  ): Promise<PrismaEmployeeStat | null> {
    return this.prisma.employeeStat.findUnique(args);
  }
  async createEmployeeStat(
    args: Prisma.EmployeeStatCreateArgs
  ): Promise<PrismaEmployeeStat> {
    return this.prisma.employeeStat.create(args);
  }
  async updateEmployeeStat(
    args: Prisma.EmployeeStatUpdateArgs
  ): Promise<PrismaEmployeeStat> {
    return this.prisma.employeeStat.update(args);
  }
  async deleteEmployeeStat(
    args: Prisma.EmployeeStatDeleteArgs
  ): Promise<PrismaEmployeeStat> {
    return this.prisma.employeeStat.delete(args);
  }

  async getSalons(parentId: string): Promise<PrismaSalon | null> {
    return this.prisma.employeeStat
      .findUnique({
        where: { id: parentId },
      })
      .salons();
  }

  async getUserProfiles(parentId: string): Promise<PrismaUserProfile | null> {
    return this.prisma.employeeStat
      .findUnique({
        where: { id: parentId },
      })
      .userProfiles();
  }
}
