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
import { EmployeeWorkSchedule } from "./EmployeeWorkSchedule";
import { EmployeeWorkScheduleCountArgs } from "./EmployeeWorkScheduleCountArgs";
import { EmployeeWorkScheduleFindManyArgs } from "./EmployeeWorkScheduleFindManyArgs";
import { EmployeeWorkScheduleFindUniqueArgs } from "./EmployeeWorkScheduleFindUniqueArgs";
import { CreateEmployeeWorkScheduleArgs } from "./CreateEmployeeWorkScheduleArgs";
import { UpdateEmployeeWorkScheduleArgs } from "./UpdateEmployeeWorkScheduleArgs";
import { DeleteEmployeeWorkScheduleArgs } from "./DeleteEmployeeWorkScheduleArgs";
import { Salon } from "../../salon/base/Salon";
import { UserProfile } from "../../userProfile/base/UserProfile";
import { EmployeeWorkScheduleService } from "../employeeWorkSchedule.service";
@graphql.Resolver(() => EmployeeWorkSchedule)
export class EmployeeWorkScheduleResolverBase {
  constructor(protected readonly service: EmployeeWorkScheduleService) {}

  async _employeeWorkSchedulesMeta(
    @graphql.Args() args: EmployeeWorkScheduleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EmployeeWorkSchedule])
  async employeeWorkSchedules(
    @graphql.Args() args: EmployeeWorkScheduleFindManyArgs
  ): Promise<EmployeeWorkSchedule[]> {
    return this.service.employeeWorkSchedules(args);
  }

  @graphql.Query(() => EmployeeWorkSchedule, { nullable: true })
  async employeeWorkSchedule(
    @graphql.Args() args: EmployeeWorkScheduleFindUniqueArgs
  ): Promise<EmployeeWorkSchedule | null> {
    const result = await this.service.employeeWorkSchedule(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EmployeeWorkSchedule)
  async createEmployeeWorkSchedule(
    @graphql.Args() args: CreateEmployeeWorkScheduleArgs
  ): Promise<EmployeeWorkSchedule> {
    return await this.service.createEmployeeWorkSchedule({
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

  @graphql.Mutation(() => EmployeeWorkSchedule)
  async updateEmployeeWorkSchedule(
    @graphql.Args() args: UpdateEmployeeWorkScheduleArgs
  ): Promise<EmployeeWorkSchedule | null> {
    try {
      return await this.service.updateEmployeeWorkSchedule({
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

  @graphql.Mutation(() => EmployeeWorkSchedule)
  async deleteEmployeeWorkSchedule(
    @graphql.Args() args: DeleteEmployeeWorkScheduleArgs
  ): Promise<EmployeeWorkSchedule | null> {
    try {
      return await this.service.deleteEmployeeWorkSchedule(args);
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
    @graphql.Parent() parent: EmployeeWorkSchedule
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
    @graphql.Parent() parent: EmployeeWorkSchedule
  ): Promise<UserProfile | null> {
    const result = await this.service.getUserProfiles(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
