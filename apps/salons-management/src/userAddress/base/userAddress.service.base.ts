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
  UserAddress as PrismaUserAddress,
  UserProfile as PrismaUserProfile,
} from "@prisma/client";

export class UserAddressServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserAddressCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userAddress.count(args);
  }

  async userAddresses(
    args: Prisma.UserAddressFindManyArgs
  ): Promise<PrismaUserAddress[]> {
    return this.prisma.userAddress.findMany(args);
  }
  async userAddress(
    args: Prisma.UserAddressFindUniqueArgs
  ): Promise<PrismaUserAddress | null> {
    return this.prisma.userAddress.findUnique(args);
  }
  async createUserAddress(
    args: Prisma.UserAddressCreateArgs
  ): Promise<PrismaUserAddress> {
    return this.prisma.userAddress.create(args);
  }
  async updateUserAddress(
    args: Prisma.UserAddressUpdateArgs
  ): Promise<PrismaUserAddress> {
    return this.prisma.userAddress.update(args);
  }
  async deleteUserAddress(
    args: Prisma.UserAddressDeleteArgs
  ): Promise<PrismaUserAddress> {
    return this.prisma.userAddress.delete(args);
  }

  async getUserProfiles(parentId: string): Promise<PrismaUserProfile | null> {
    return this.prisma.userAddress
      .findUnique({
        where: { id: parentId },
      })
      .userProfiles();
  }
}
