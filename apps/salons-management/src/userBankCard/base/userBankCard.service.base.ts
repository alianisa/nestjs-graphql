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
  UserBankCard as PrismaUserBankCard,
  UserProfile as PrismaUserProfile,
} from "@prisma/client";

export class UserBankCardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserBankCardCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userBankCard.count(args);
  }

  async userBankCards(
    args: Prisma.UserBankCardFindManyArgs
  ): Promise<PrismaUserBankCard[]> {
    return this.prisma.userBankCard.findMany(args);
  }
  async userBankCard(
    args: Prisma.UserBankCardFindUniqueArgs
  ): Promise<PrismaUserBankCard | null> {
    return this.prisma.userBankCard.findUnique(args);
  }
  async createUserBankCard(
    args: Prisma.UserBankCardCreateArgs
  ): Promise<PrismaUserBankCard> {
    return this.prisma.userBankCard.create(args);
  }
  async updateUserBankCard(
    args: Prisma.UserBankCardUpdateArgs
  ): Promise<PrismaUserBankCard> {
    return this.prisma.userBankCard.update(args);
  }
  async deleteUserBankCard(
    args: Prisma.UserBankCardDeleteArgs
  ): Promise<PrismaUserBankCard> {
    return this.prisma.userBankCard.delete(args);
  }

  async getUserProfiles(parentId: string): Promise<PrismaUserProfile | null> {
    return this.prisma.userBankCard
      .findUnique({
        where: { id: parentId },
      })
      .userProfiles();
  }
}
