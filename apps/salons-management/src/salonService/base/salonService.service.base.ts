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
  SalonService as PrismaSalonService,
  SalonServiceCategory as PrismaSalonServiceCategory,
  Salon as PrismaSalon,
} from "@prisma/client";

export class SalonServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SalonServiceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.salonService.count(args);
  }

  async salonServices(
    args: Prisma.SalonServiceFindManyArgs
  ): Promise<PrismaSalonService[]> {
    return this.prisma.salonService.findMany(args);
  }
  async salonService(
    args: Prisma.SalonServiceFindUniqueArgs
  ): Promise<PrismaSalonService | null> {
    return this.prisma.salonService.findUnique(args);
  }
  async createSalonService(
    args: Prisma.SalonServiceCreateArgs
  ): Promise<PrismaSalonService> {
    return this.prisma.salonService.create(args);
  }
  async updateSalonService(
    args: Prisma.SalonServiceUpdateArgs
  ): Promise<PrismaSalonService> {
    return this.prisma.salonService.update(args);
  }
  async deleteSalonService(
    args: Prisma.SalonServiceDeleteArgs
  ): Promise<PrismaSalonService> {
    return this.prisma.salonService.delete(args);
  }

  async getSalonServiceCategories(
    parentId: string
  ): Promise<PrismaSalonServiceCategory | null> {
    return this.prisma.salonService
      .findUnique({
        where: { id: parentId },
      })
      .salonServiceCategories();
  }

  async getSalons(parentId: string): Promise<PrismaSalon | null> {
    return this.prisma.salonService
      .findUnique({
        where: { id: parentId },
      })
      .salons();
  }
}
