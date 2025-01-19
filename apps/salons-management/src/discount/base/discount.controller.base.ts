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
import { DiscountService } from "../discount.service";
import { DiscountCreateInput } from "./DiscountCreateInput";
import { Discount } from "./Discount";
import { DiscountFindManyArgs } from "./DiscountFindManyArgs";
import { DiscountWhereUniqueInput } from "./DiscountWhereUniqueInput";
import { DiscountUpdateInput } from "./DiscountUpdateInput";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { PromocodeFindManyArgs } from "../../promocode/base/PromocodeFindManyArgs";
import { Promocode } from "../../promocode/base/Promocode";
import { PromocodeWhereUniqueInput } from "../../promocode/base/PromocodeWhereUniqueInput";

export class DiscountControllerBase {
  constructor(protected readonly service: DiscountService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Discount })
  async createDiscount(
    @common.Body() data: DiscountCreateInput
  ): Promise<Discount> {
    return await this.service.createDiscount({
      data: data,
      select: {
        createdAt: true,
        description: true,
        discountType: true,
        endDate: true,
        id: true,
        isActive: true,
        maxDiscountAmount: true,
        minOrderAmount: true,
        name: true,
        serviceCategories: true,
        startDate: true,
        updatedAt: true,
        usageLimit: true,
        userLimit: true,
        value: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Discount] })
  @ApiNestedQuery(DiscountFindManyArgs)
  async discounts(@common.Req() request: Request): Promise<Discount[]> {
    const args = plainToClass(DiscountFindManyArgs, request.query);
    return this.service.discounts({
      ...args,
      select: {
        createdAt: true,
        description: true,
        discountType: true,
        endDate: true,
        id: true,
        isActive: true,
        maxDiscountAmount: true,
        minOrderAmount: true,
        name: true,
        serviceCategories: true,
        startDate: true,
        updatedAt: true,
        usageLimit: true,
        userLimit: true,
        value: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Discount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async discount(
    @common.Param() params: DiscountWhereUniqueInput
  ): Promise<Discount | null> {
    const result = await this.service.discount({
      where: params,
      select: {
        createdAt: true,
        description: true,
        discountType: true,
        endDate: true,
        id: true,
        isActive: true,
        maxDiscountAmount: true,
        minOrderAmount: true,
        name: true,
        serviceCategories: true,
        startDate: true,
        updatedAt: true,
        usageLimit: true,
        userLimit: true,
        value: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Discount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDiscount(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() data: DiscountUpdateInput
  ): Promise<Discount | null> {
    try {
      return await this.service.updateDiscount({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          discountType: true,
          endDate: true,
          id: true,
          isActive: true,
          maxDiscountAmount: true,
          minOrderAmount: true,
          name: true,
          serviceCategories: true,
          startDate: true,
          updatedAt: true,
          usageLimit: true,
          userLimit: true,
          value: true,
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
  @swagger.ApiOkResponse({ type: Discount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDiscount(
    @common.Param() params: DiscountWhereUniqueInput
  ): Promise<Discount | null> {
    try {
      return await this.service.deleteDiscount({
        where: params,
        select: {
          createdAt: true,
          description: true,
          discountType: true,
          endDate: true,
          id: true,
          isActive: true,
          maxDiscountAmount: true,
          minOrderAmount: true,
          name: true,
          serviceCategories: true,
          startDate: true,
          updatedAt: true,
          usageLimit: true,
          userLimit: true,
          value: true,
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

  @common.Get("/:id/orders")
  @ApiNestedQuery(OrderFindManyArgs)
  async findOrders(
    @common.Req() request: Request,
    @common.Param() params: DiscountWhereUniqueInput
  ): Promise<Order[]> {
    const query = plainToClass(OrderFindManyArgs, request.query);
    const results = await this.service.findOrders(params.id, {
      ...query,
      select: {
        amount: true,

        appointmentsOrdersAppointmentIdToappointments: {
          select: {
            id: true,
          },
        },

        canceled: true,
        canceledReason: true,
        completed: true,
        completedAt: true,
        createdAt: true,
        depositAmount: true,
        discount: true,
        discountAmount: true,

        discounts: {
          select: {
            id: true,
          },
        },

        id: true,
        loyaltyPointsEarned: true,
        loyaltyPointsUsed: true,
        orderImageId: true,
        orderNumber: true,
        order_type: true,

        payments: {
          select: {
            id: true,
          },
        },

        promocodes: {
          select: {
            id: true,
          },
        },

        queuesOrdersQueueIdToqueues: {
          select: {
            id: true,
          },
        },

        salons: {
          select: {
            id: true,
          },
        },

        services: true,
        started: true,
        startedAt: true,
        status: true,
        totalAmount: true,
        updatedAt: true,

        userProfilesOrdersEmployeeIdTouserProfiles: {
          select: {
            id: true,
          },
        },

        userProfilesOrdersUserIdTouserProfiles: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orders")
  async connectOrders(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        connect: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orders")
  async updateOrders(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        set: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orders")
  async disconnectOrders(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        disconnect: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/promocodes")
  @ApiNestedQuery(PromocodeFindManyArgs)
  async findPromocodes(
    @common.Req() request: Request,
    @common.Param() params: DiscountWhereUniqueInput
  ): Promise<Promocode[]> {
    const query = plainToClass(PromocodeFindManyArgs, request.query);
    const results = await this.service.findPromocodes(params.id, {
      ...query,
      select: {
        code: true,
        createdAt: true,

        discounts: {
          select: {
            id: true,
          },
        },

        endDate: true,
        id: true,
        isActive: true,
        startDate: true,
        updatedAt: true,
        usageLimit: true,
        usedCount: true,
        userLimit: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/promocodes")
  async connectPromocodes(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: PromocodeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promocodes: {
        connect: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/promocodes")
  async updatePromocodes(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: PromocodeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promocodes: {
        set: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/promocodes")
  async disconnectPromocodes(
    @common.Param() params: DiscountWhereUniqueInput,
    @common.Body() body: PromocodeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promocodes: {
        disconnect: body,
      },
    };
    await this.service.updateDiscount({
      where: params,
      data,
      select: { id: true },
    });
  }
}
