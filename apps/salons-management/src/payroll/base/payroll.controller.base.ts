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
import { PayrollService } from "../payroll.service";
import { PayrollCreateInput } from "./PayrollCreateInput";
import { Payroll } from "./Payroll";
import { PayrollFindManyArgs } from "./PayrollFindManyArgs";
import { PayrollWhereUniqueInput } from "./PayrollWhereUniqueInput";
import { PayrollUpdateInput } from "./PayrollUpdateInput";

export class PayrollControllerBase {
  constructor(protected readonly service: PayrollService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Payroll })
  async createPayroll(
    @common.Body() data: PayrollCreateInput
  ): Promise<Payroll> {
    return await this.service.createPayroll({
      data: {
        ...data,

        userProfiles: {
          connect: data.userProfiles,
        },
      },
      select: {
        amount: true,
        createdAt: true,
        id: true,

        userProfiles: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Payroll] })
  @ApiNestedQuery(PayrollFindManyArgs)
  async payrolls(@common.Req() request: Request): Promise<Payroll[]> {
    const args = plainToClass(PayrollFindManyArgs, request.query);
    return this.service.payrolls({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        id: true,

        userProfiles: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Payroll })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async payroll(
    @common.Param() params: PayrollWhereUniqueInput
  ): Promise<Payroll | null> {
    const result = await this.service.payroll({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        id: true,

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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Payroll })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePayroll(
    @common.Param() params: PayrollWhereUniqueInput,
    @common.Body() data: PayrollUpdateInput
  ): Promise<Payroll | null> {
    try {
      return await this.service.updatePayroll({
        where: params,
        data: {
          ...data,

          userProfiles: {
            connect: data.userProfiles,
          },
        },
        select: {
          amount: true,
          createdAt: true,
          id: true,

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
  @swagger.ApiOkResponse({ type: Payroll })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePayroll(
    @common.Param() params: PayrollWhereUniqueInput
  ): Promise<Payroll | null> {
    try {
      return await this.service.deletePayroll({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          id: true,

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
