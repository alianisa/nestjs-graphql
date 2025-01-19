/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SalonAccount } from "./SalonAccount";
import { SalonAccountCountArgs } from "./SalonAccountCountArgs";
import { SalonAccountFindManyArgs } from "./SalonAccountFindManyArgs";
import { SalonAccountFindUniqueArgs } from "./SalonAccountFindUniqueArgs";
import { CreateSalonAccountArgs } from "./CreateSalonAccountArgs";
import { UpdateSalonAccountArgs } from "./UpdateSalonAccountArgs";
import { DeleteSalonAccountArgs } from "./DeleteSalonAccountArgs";
import { Salon } from "../../salon/base/Salon";
import { UserProfile } from "../../userProfile/base/UserProfile";
import { SalonAccountService } from "../salonAccount.service";
@graphql.Resolver(() => SalonAccount)
export class SalonAccountResolverBase {
  constructor(protected readonly service: SalonAccountService) {}

  async _salonAccountsMeta(
    @graphql.Args() args: SalonAccountCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SalonAccount])
  async salonAccounts(
    @graphql.Args() args: SalonAccountFindManyArgs
  ): Promise<SalonAccount[]> {
    return this.service.salonAccounts(args);
  }

  @graphql.Query(() => SalonAccount, { nullable: true })
  async salonAccount(
    @graphql.Args() args: SalonAccountFindUniqueArgs
  ): Promise<SalonAccount | null> {
    const result = await this.service.salonAccount(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SalonAccount)
  async createSalonAccount(
    @graphql.Args() args: CreateSalonAccountArgs
  ): Promise<SalonAccount> {
    return await this.service.createSalonAccount({
      ...args,
      data: {
        ...args.data,

        salons: args.data.salons
          ? {
              connect: args.data.salons,
            }
          : undefined,

        userProfiles: args.data.userProfiles
          ? {
              connect: args.data.userProfiles,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => SalonAccount)
  async updateSalonAccount(
    @graphql.Args() args: UpdateSalonAccountArgs
  ): Promise<SalonAccount | null> {
    try {
      return await this.service.updateSalonAccount({
        ...args,
        data: {
          ...args.data,

          salons: args.data.salons
            ? {
                connect: args.data.salons,
              }
            : undefined,

          userProfiles: args.data.userProfiles
            ? {
                connect: args.data.userProfiles,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SalonAccount)
  async deleteSalonAccount(
    @graphql.Args() args: DeleteSalonAccountArgs
  ): Promise<SalonAccount | null> {
    try {
      return await this.service.deleteSalonAccount(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Salon, {
    nullable: true,
    name: "salons",
  })
  async getSalons(
    @graphql.Parent() parent: SalonAccount
  ): Promise<Salon | null> {
    const result = await this.service.getSalons(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => UserProfile, {
    nullable: true,
    name: "userProfiles",
  })
  async getUserProfiles(
    @graphql.Parent() parent: SalonAccount
  ): Promise<UserProfile | null> {
    const result = await this.service.getUserProfiles(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
