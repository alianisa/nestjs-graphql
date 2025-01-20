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
  UserFavoriteMaster as PrismaUserFavoriteMaster,
  UserProfile as PrismaUserProfile,
} from "@prisma/client";

export class UserFavoriteMasterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserFavoriteMasterCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userFavoriteMaster.count(args);
  }

  async userFavoriteMasters(
    args: Prisma.UserFavoriteMasterFindManyArgs
  ): Promise<PrismaUserFavoriteMaster[]> {
    return this.prisma.userFavoriteMaster.findMany(args);
  }
  async userFavoriteMaster(
    args: Prisma.UserFavoriteMasterFindUniqueArgs
  ): Promise<PrismaUserFavoriteMaster | null> {
    return this.prisma.userFavoriteMaster.findUnique(args);
  }
  async createUserFavoriteMaster(
    args: Prisma.UserFavoriteMasterCreateArgs
  ): Promise<PrismaUserFavoriteMaster> {
    return this.prisma.userFavoriteMaster.create(args);
  }
  async updateUserFavoriteMaster(
    args: Prisma.UserFavoriteMasterUpdateArgs
  ): Promise<PrismaUserFavoriteMaster> {
    return this.prisma.userFavoriteMaster.update(args);
  }
  async deleteUserFavoriteMaster(
    args: Prisma.UserFavoriteMasterDeleteArgs
  ): Promise<PrismaUserFavoriteMaster> {
    return this.prisma.userFavoriteMaster.delete(args);
  }

  async getUserProfilesUserFavoriteMastersMasterIdTouserProfiles(
    parentId: string
  ): Promise<PrismaUserProfile | null> {
    return this.prisma.userFavoriteMaster
      .findUnique({
        where: { id: parentId },
      })
      .userProfilesUserFavoriteMastersMasterIdTouserProfiles();
  }

  async getUserProfilesUserFavoriteMastersUserIdTouserProfiles(
    parentId: string
  ): Promise<PrismaUserProfile | null> {
    return this.prisma.userFavoriteMaster
      .findUnique({
        where: { id: parentId },
      })
      .userProfilesUserFavoriteMastersUserIdTouserProfiles();
  }
}
