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
  Schedule as PrismaSchedule,
  UserProfile as PrismaUserProfile,
} from "@prisma/client";

export class ScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ScheduleCountArgs, "select">): Promise<number> {
    return this.prisma.schedule.count(args);
  }

  async schedules(
    args: Prisma.ScheduleFindManyArgs
  ): Promise<PrismaSchedule[]> {
    return this.prisma.schedule.findMany(args);
  }
  async schedule(
    args: Prisma.ScheduleFindUniqueArgs
  ): Promise<PrismaSchedule | null> {
    return this.prisma.schedule.findUnique(args);
  }
  async createSchedule(
    args: Prisma.ScheduleCreateArgs
  ): Promise<PrismaSchedule> {
    return this.prisma.schedule.create(args);
  }
  async updateSchedule(
    args: Prisma.ScheduleUpdateArgs
  ): Promise<PrismaSchedule> {
    return this.prisma.schedule.update(args);
  }
  async deleteSchedule(
    args: Prisma.ScheduleDeleteArgs
  ): Promise<PrismaSchedule> {
    return this.prisma.schedule.delete(args);
  }

  async getUserProfilesScheduleBarberIdTouserProfiles(
    parentId: number
  ): Promise<PrismaUserProfile | null> {
    return this.prisma.schedule
      .findUnique({
        where: { id: parentId },
      })
      .userProfilesScheduleBarberIdTouserProfiles();
  }

  async getUserProfilesScheduleUserIdTouserProfiles(
    parentId: number
  ): Promise<PrismaUserProfile | null> {
    return this.prisma.schedule
      .findUnique({
        where: { id: parentId },
      })
      .userProfilesScheduleUserIdTouserProfiles();
  }
}
