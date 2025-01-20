/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { LoyaltyTransactionService } from "../loyaltyTransaction.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LoyaltyTransactionCreateInput } from "./LoyaltyTransactionCreateInput";
import { LoyaltyTransaction } from "./LoyaltyTransaction";
import { LoyaltyTransactionFindManyArgs } from "./LoyaltyTransactionFindManyArgs";
import { LoyaltyTransactionWhereUniqueInput } from "./LoyaltyTransactionWhereUniqueInput";
import { LoyaltyTransactionUpdateInput } from "./LoyaltyTransactionUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LoyaltyTransactionControllerBase {
  constructor(
    protected readonly service: LoyaltyTransactionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LoyaltyTransaction })
  @nestAccessControl.UseRoles({
    resource: "LoyaltyTransaction",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createLoyaltyTransaction(
    @common.Body() data: LoyaltyTransactionCreateInput
  ): Promise<LoyaltyTransaction> {
    return await this.service.createLoyaltyTransaction({
      data: {
        ...data,

        orders: data.orders
          ? {
              connect: data.orders,
            }
          : undefined,

        userProfiles: data.userProfiles
          ? {
              connect: data.userProfiles,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        id: true,

        orders: {
          select: {
            id: true,
          },
        },

        pointsEarned: true,
        pointsSpent: true,
        transactionType: true,

        userProfiles: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [LoyaltyTransaction] })
  @ApiNestedQuery(LoyaltyTransactionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "LoyaltyTransaction",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async loyaltyTransactions(
    @common.Req() request: Request
  ): Promise<LoyaltyTransaction[]> {
    const args = plainToClass(LoyaltyTransactionFindManyArgs, request.query);
    return this.service.loyaltyTransactions({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,

        orders: {
          select: {
            id: true,
          },
        },

        pointsEarned: true,
        pointsSpent: true,
        transactionType: true,

        userProfiles: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LoyaltyTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LoyaltyTransaction",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async loyaltyTransaction(
    @common.Param() params: LoyaltyTransactionWhereUniqueInput
  ): Promise<LoyaltyTransaction | null> {
    const result = await this.service.loyaltyTransaction({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,

        orders: {
          select: {
            id: true,
          },
        },

        pointsEarned: true,
        pointsSpent: true,
        transactionType: true,

        userProfiles: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: LoyaltyTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LoyaltyTransaction",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateLoyaltyTransaction(
    @common.Param() params: LoyaltyTransactionWhereUniqueInput,
    @common.Body() data: LoyaltyTransactionUpdateInput
  ): Promise<LoyaltyTransaction | null> {
    try {
      return await this.service.updateLoyaltyTransaction({
        where: params,
        data: {
          ...data,

          orders: data.orders
            ? {
                connect: data.orders,
              }
            : undefined,

          userProfiles: data.userProfiles
            ? {
                connect: data.userProfiles,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          id: true,

          orders: {
            select: {
              id: true,
            },
          },

          pointsEarned: true,
          pointsSpent: true,
          transactionType: true,

          userProfiles: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: LoyaltyTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LoyaltyTransaction",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteLoyaltyTransaction(
    @common.Param() params: LoyaltyTransactionWhereUniqueInput
  ): Promise<LoyaltyTransaction | null> {
    try {
      return await this.service.deleteLoyaltyTransaction({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,

          orders: {
            select: {
              id: true,
            },
          },

          pointsEarned: true,
          pointsSpent: true,
          transactionType: true,

          userProfiles: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
