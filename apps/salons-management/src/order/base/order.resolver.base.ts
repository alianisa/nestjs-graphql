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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Order } from "./Order";
import { OrderCountArgs } from "./OrderCountArgs";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderFindUniqueArgs } from "./OrderFindUniqueArgs";
import { CreateOrderArgs } from "./CreateOrderArgs";
import { UpdateOrderArgs } from "./UpdateOrderArgs";
import { DeleteOrderArgs } from "./DeleteOrderArgs";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { DepositFindManyArgs } from "../../deposit/base/DepositFindManyArgs";
import { Deposit } from "../../deposit/base/Deposit";
import { EmployeeTaskFindManyArgs } from "../../employeeTask/base/EmployeeTaskFindManyArgs";
import { EmployeeTask } from "../../employeeTask/base/EmployeeTask";
import { LoyaltyTransactionFindManyArgs } from "../../loyaltyTransaction/base/LoyaltyTransactionFindManyArgs";
import { LoyaltyTransaction } from "../../loyaltyTransaction/base/LoyaltyTransaction";
import { OrderImageFindManyArgs } from "../../orderImage/base/OrderImageFindManyArgs";
import { OrderImage } from "../../orderImage/base/OrderImage";
import { QueueFindManyArgs } from "../../queue/base/QueueFindManyArgs";
import { Queue } from "../../queue/base/Queue";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { UserRatingFindManyArgs } from "../../userRating/base/UserRatingFindManyArgs";
import { UserRating } from "../../userRating/base/UserRating";
import { Discount } from "../../discount/base/Discount";
import { Payment } from "../../payment/base/Payment";
import { Promocode } from "../../promocode/base/Promocode";
import { Salon } from "../../salon/base/Salon";
import { UserProfile } from "../../userProfile/base/UserProfile";
import { OrderService } from "../order.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Order)
export class OrderResolverBase {
  constructor(
    protected readonly service: OrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async _ordersMeta(
    @graphql.Args() args: OrderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Order])
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async orders(@graphql.Args() args: OrderFindManyArgs): Promise<Order[]> {
    return this.service.orders(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Order, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "own",
  })
  async order(
    @graphql.Args() args: OrderFindUniqueArgs
  ): Promise<Order | null> {
    const result = await this.service.order(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Order)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "create",
    possession: "any",
  })
  async createOrder(@graphql.Args() args: CreateOrderArgs): Promise<Order> {
    return await this.service.createOrder({
      ...args,
      data: {
        ...args.data,

        appointmentsOrdersAppointmentIdToappointments: args.data
          .appointmentsOrdersAppointmentIdToappointments
          ? {
              connect: args.data.appointmentsOrdersAppointmentIdToappointments,
            }
          : undefined,

        discounts: args.data.discounts
          ? {
              connect: args.data.discounts,
            }
          : undefined,

        payments: args.data.payments
          ? {
              connect: args.data.payments,
            }
          : undefined,

        promocodes: args.data.promocodes
          ? {
              connect: args.data.promocodes,
            }
          : undefined,

        queuesOrdersQueueIdToqueues: args.data.queuesOrdersQueueIdToqueues
          ? {
              connect: args.data.queuesOrdersQueueIdToqueues,
            }
          : undefined,

        salons: {
          connect: args.data.salons,
        },

        userProfilesOrdersEmployeeIdTouserProfiles: {
          connect: args.data.userProfilesOrdersEmployeeIdTouserProfiles,
        },

        userProfilesOrdersUserIdTouserProfiles: {
          connect: args.data.userProfilesOrdersUserIdTouserProfiles,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Order)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async updateOrder(
    @graphql.Args() args: UpdateOrderArgs
  ): Promise<Order | null> {
    try {
      return await this.service.updateOrder({
        ...args,
        data: {
          ...args.data,

          appointmentsOrdersAppointmentIdToappointments: args.data
            .appointmentsOrdersAppointmentIdToappointments
            ? {
                connect:
                  args.data.appointmentsOrdersAppointmentIdToappointments,
              }
            : undefined,

          discounts: args.data.discounts
            ? {
                connect: args.data.discounts,
              }
            : undefined,

          payments: args.data.payments
            ? {
                connect: args.data.payments,
              }
            : undefined,

          promocodes: args.data.promocodes
            ? {
                connect: args.data.promocodes,
              }
            : undefined,

          queuesOrdersQueueIdToqueues: args.data.queuesOrdersQueueIdToqueues
            ? {
                connect: args.data.queuesOrdersQueueIdToqueues,
              }
            : undefined,

          salons: {
            connect: args.data.salons,
          },

          userProfilesOrdersEmployeeIdTouserProfiles: {
            connect: args.data.userProfilesOrdersEmployeeIdTouserProfiles,
          },

          userProfilesOrdersUserIdTouserProfiles: {
            connect: args.data.userProfilesOrdersUserIdTouserProfiles,
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

  @graphql.Mutation(() => Order)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "delete",
    possession: "any",
  })
  async deleteOrder(
    @graphql.Args() args: DeleteOrderArgs
  ): Promise<Order | null> {
    try {
      return await this.service.deleteOrder(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Appointment], {
    name: "appointmentsAppointmentsOrderIdToorders",
  })
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "read",
    possession: "any",
  })
  async findAppointmentsAppointmentsOrderIdToorders(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: AppointmentFindManyArgs
  ): Promise<Appointment[]> {
    const results =
      await this.service.findAppointmentsAppointmentsOrderIdToorders(
        parent.id,
        args
      );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Deposit], { name: "deposits" })
  @nestAccessControl.UseRoles({
    resource: "Deposit",
    action: "read",
    possession: "any",
  })
  async findDeposits(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: DepositFindManyArgs
  ): Promise<Deposit[]> {
    const results = await this.service.findDeposits(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [EmployeeTask], { name: "employeeTasks" })
  @nestAccessControl.UseRoles({
    resource: "EmployeeTask",
    action: "read",
    possession: "any",
  })
  async findEmployeeTasks(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: EmployeeTaskFindManyArgs
  ): Promise<EmployeeTask[]> {
    const results = await this.service.findEmployeeTasks(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [LoyaltyTransaction], {
    name: "loyaltyTransactions",
  })
  @nestAccessControl.UseRoles({
    resource: "LoyaltyTransaction",
    action: "read",
    possession: "any",
  })
  async findLoyaltyTransactions(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: LoyaltyTransactionFindManyArgs
  ): Promise<LoyaltyTransaction[]> {
    const results = await this.service.findLoyaltyTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [OrderImage], { name: "orderImages" })
  @nestAccessControl.UseRoles({
    resource: "OrderImage",
    action: "read",
    possession: "any",
  })
  async findOrderImages(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: OrderImageFindManyArgs
  ): Promise<OrderImage[]> {
    const results = await this.service.findOrderImages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Queue], { name: "queuesQueuesOrderIdToorders" })
  @nestAccessControl.UseRoles({
    resource: "Queue",
    action: "read",
    possession: "any",
  })
  async findQueuesQueuesOrderIdToorders(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: QueueFindManyArgs
  ): Promise<Queue[]> {
    const results = await this.service.findQueuesQueuesOrderIdToorders(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Transaction], { name: "transactions" })
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async findTransactions(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [UserRating], { name: "userRatings" })
  @nestAccessControl.UseRoles({
    resource: "UserRating",
    action: "read",
    possession: "any",
  })
  async findUserRatings(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: UserRatingFindManyArgs
  ): Promise<UserRating[]> {
    const results = await this.service.findUserRatings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Appointment, {
    nullable: true,
    name: "appointmentsOrdersAppointmentIdToappointments",
  })
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "read",
    possession: "any",
  })
  async getAppointmentsOrdersAppointmentIdToappointments(
    @graphql.Parent() parent: Order
  ): Promise<Appointment | null> {
    const result =
      await this.service.getAppointmentsOrdersAppointmentIdToappointments(
        parent.id
      );

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Discount, {
    nullable: true,
    name: "discounts",
  })
  @nestAccessControl.UseRoles({
    resource: "Discount",
    action: "read",
    possession: "any",
  })
  async getDiscounts(
    @graphql.Parent() parent: Order
  ): Promise<Discount | null> {
    const result = await this.service.getDiscounts(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Payment, {
    nullable: true,
    name: "payments",
  })
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "read",
    possession: "any",
  })
  async getPayments(@graphql.Parent() parent: Order): Promise<Payment | null> {
    const result = await this.service.getPayments(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Promocode, {
    nullable: true,
    name: "promocodes",
  })
  @nestAccessControl.UseRoles({
    resource: "Promocode",
    action: "read",
    possession: "any",
  })
  async getPromocodes(
    @graphql.Parent() parent: Order
  ): Promise<Promocode | null> {
    const result = await this.service.getPromocodes(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Queue, {
    nullable: true,
    name: "queuesOrdersQueueIdToqueues",
  })
  @nestAccessControl.UseRoles({
    resource: "Queue",
    action: "read",
    possession: "any",
  })
  async getQueuesOrdersQueueIdToqueues(
    @graphql.Parent() parent: Order
  ): Promise<Queue | null> {
    const result = await this.service.getQueuesOrdersQueueIdToqueues(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Salon, {
    nullable: true,
    name: "salons",
  })
  @nestAccessControl.UseRoles({
    resource: "Salon",
    action: "read",
    possession: "any",
  })
  async getSalons(@graphql.Parent() parent: Order): Promise<Salon | null> {
    const result = await this.service.getSalons(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => UserProfile, {
    nullable: true,
    name: "userProfilesOrdersEmployeeIdTouserProfiles",
  })
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "read",
    possession: "any",
  })
  async getUserProfilesOrdersEmployeeIdTouserProfiles(
    @graphql.Parent() parent: Order
  ): Promise<UserProfile | null> {
    const result =
      await this.service.getUserProfilesOrdersEmployeeIdTouserProfiles(
        parent.id
      );

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => UserProfile, {
    nullable: true,
    name: "userProfilesOrdersUserIdTouserProfiles",
  })
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "read",
    possession: "any",
  })
  async getUserProfilesOrdersUserIdTouserProfiles(
    @graphql.Parent() parent: Order
  ): Promise<UserProfile | null> {
    const result = await this.service.getUserProfilesOrdersUserIdTouserProfiles(
      parent.id
    );

    if (!result) {
      return null;
    }
    return result;
  }
}
