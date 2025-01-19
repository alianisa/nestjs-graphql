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
import { EmployeeDailyStat } from "./EmployeeDailyStat";
import { EmployeeDailyStatCountArgs } from "./EmployeeDailyStatCountArgs";
import { EmployeeDailyStatFindManyArgs } from "./EmployeeDailyStatFindManyArgs";
import { EmployeeDailyStatFindUniqueArgs } from "./EmployeeDailyStatFindUniqueArgs";
import { CreateEmployeeDailyStatArgs } from "./CreateEmployeeDailyStatArgs";
import { UpdateEmployeeDailyStatArgs } from "./UpdateEmployeeDailyStatArgs";
import { DeleteEmployeeDailyStatArgs } from "./DeleteEmployeeDailyStatArgs";
import { Salon } from "../../salon/base/Salon";
import { UserProfile } from "../../userProfile/base/UserProfile";
import { EmployeeDailyStatService } from "../employeeDailyStat.service";
@graphql.Resolver(() => EmployeeDailyStat)
export class EmployeeDailyStatResolverBase {
  constructor(protected readonly service: EmployeeDailyStatService) {}

  async _employeeDailyStatsMeta(
    @graphql.Args() args: EmployeeDailyStatCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EmployeeDailyStat])
  async employeeDailyStats(
    @graphql.Args() args: EmployeeDailyStatFindManyArgs
  ): Promise<EmployeeDailyStat[]> {
    return this.service.employeeDailyStats(args);
  }

  @graphql.Query(() => EmployeeDailyStat, { nullable: true })
  async employeeDailyStat(
    @graphql.Args() args: EmployeeDailyStatFindUniqueArgs
  ): Promise<EmployeeDailyStat | null> {
    const result = await this.service.employeeDailyStat(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EmployeeDailyStat)
  async createEmployeeDailyStat(
    @graphql.Args() args: CreateEmployeeDailyStatArgs
  ): Promise<EmployeeDailyStat> {
    return await this.service.createEmployeeDailyStat({
      ...args,
      data: {
        ...args.data,

        salons: {
          connect: args.data.salons,
        },

        userProfiles: {
          connect: args.data.userProfiles,
        },
      },
    });
  }

  @graphql.Mutation(() => EmployeeDailyStat)
  async updateEmployeeDailyStat(
    @graphql.Args() args: UpdateEmployeeDailyStatArgs
  ): Promise<EmployeeDailyStat | null> {
    try {
      return await this.service.updateEmployeeDailyStat({
        ...args,
        data: {
          ...args.data,

          salons: {
            connect: args.data.salons,
          },

          userProfiles: {
            connect: args.data.userProfiles,
          },
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

  @graphql.Mutation(() => EmployeeDailyStat)
  async deleteEmployeeDailyStat(
    @graphql.Args() args: DeleteEmployeeDailyStatArgs
  ): Promise<EmployeeDailyStat | null> {
    try {
      return await this.service.deleteEmployeeDailyStat(args);
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
    @graphql.Parent() parent: EmployeeDailyStat
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
    @graphql.Parent() parent: EmployeeDailyStat
  ): Promise<UserProfile | null> {
    const result = await this.service.getUserProfiles(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
