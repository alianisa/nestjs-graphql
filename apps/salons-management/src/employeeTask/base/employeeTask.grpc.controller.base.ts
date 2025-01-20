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
import { GrpcMethod } from "@nestjs/microservices";
import { EmployeeTaskService } from "../employeeTask.service";
import { EmployeeTaskCreateInput } from "./EmployeeTaskCreateInput";
import { EmployeeTaskWhereInput } from "./EmployeeTaskWhereInput";
import { EmployeeTaskWhereUniqueInput } from "./EmployeeTaskWhereUniqueInput";
import { EmployeeTaskFindManyArgs } from "./EmployeeTaskFindManyArgs";
import { EmployeeTaskUpdateInput } from "./EmployeeTaskUpdateInput";
import { EmployeeTask } from "./EmployeeTask";

export class EmployeeTaskGrpcControllerBase {
  constructor(protected readonly service: EmployeeTaskService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmployeeTask })
  @GrpcMethod("EmployeeTaskService", "createEmployeeTask")
  async createEmployeeTask(
    @common.Body() data: EmployeeTaskCreateInput
  ): Promise<EmployeeTask> {
    return await this.service.createEmployeeTask({
      data: {
        ...data,

        appointments: data.appointments
          ? {
              connect: data.appointments,
            }
          : undefined,

        orders: {
          connect: data.orders,
        },

        queues: data.queues
          ? {
              connect: data.queues,
            }
          : undefined,

        salons: {
          connect: data.salons,
        },

        userProfiles: {
          connect: data.userProfiles,
        },
      },
      select: {
        actualDuration: true,
        actualStartTime: true,

        appointments: {
          select: {
            id: true,
          },
        },

        completedAt: true,
        createdAt: true,
        estimatedDuration: true,
        id: true,
        notes: true,
        order_type: true,

        orders: {
          select: {
            id: true,
          },
        },

        queues: {
          select: {
            id: true,
          },
        },

        salons: {
          select: {
            id: true,
          },
        },

        scheduledStartTime: true,
        task_status: true,
        updatedAt: true,

        userProfiles: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EmployeeTask] })
  @ApiNestedQuery(EmployeeTaskFindManyArgs)
  @GrpcMethod("EmployeeTaskService", "employeeTasks")
  async employeeTasks(@common.Req() request: Request): Promise<EmployeeTask[]> {
    const args = plainToClass(EmployeeTaskFindManyArgs, request.query);
    return this.service.employeeTasks({
      ...args,
      select: {
        actualDuration: true,
        actualStartTime: true,

        appointments: {
          select: {
            id: true,
          },
        },

        completedAt: true,
        createdAt: true,
        estimatedDuration: true,
        id: true,
        notes: true,
        order_type: true,

        orders: {
          select: {
            id: true,
          },
        },

        queues: {
          select: {
            id: true,
          },
        },

        salons: {
          select: {
            id: true,
          },
        },

        scheduledStartTime: true,
        task_status: true,
        updatedAt: true,

        userProfiles: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmployeeTask })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("EmployeeTaskService", "employeeTask")
  async employeeTask(
    @common.Param() params: EmployeeTaskWhereUniqueInput
  ): Promise<EmployeeTask | null> {
    const result = await this.service.employeeTask({
      where: params,
      select: {
        actualDuration: true,
        actualStartTime: true,

        appointments: {
          select: {
            id: true,
          },
        },

        completedAt: true,
        createdAt: true,
        estimatedDuration: true,
        id: true,
        notes: true,
        order_type: true,

        orders: {
          select: {
            id: true,
          },
        },

        queues: {
          select: {
            id: true,
          },
        },

        salons: {
          select: {
            id: true,
          },
        },

        scheduledStartTime: true,
        task_status: true,
        updatedAt: true,

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
  @swagger.ApiOkResponse({ type: EmployeeTask })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("EmployeeTaskService", "updateEmployeeTask")
  async updateEmployeeTask(
    @common.Param() params: EmployeeTaskWhereUniqueInput,
    @common.Body() data: EmployeeTaskUpdateInput
  ): Promise<EmployeeTask | null> {
    try {
      return await this.service.updateEmployeeTask({
        where: params,
        data: {
          ...data,

          appointments: data.appointments
            ? {
                connect: data.appointments,
              }
            : undefined,

          orders: {
            connect: data.orders,
          },

          queues: data.queues
            ? {
                connect: data.queues,
              }
            : undefined,

          salons: {
            connect: data.salons,
          },

          userProfiles: {
            connect: data.userProfiles,
          },
        },
        select: {
          actualDuration: true,
          actualStartTime: true,

          appointments: {
            select: {
              id: true,
            },
          },

          completedAt: true,
          createdAt: true,
          estimatedDuration: true,
          id: true,
          notes: true,
          order_type: true,

          orders: {
            select: {
              id: true,
            },
          },

          queues: {
            select: {
              id: true,
            },
          },

          salons: {
            select: {
              id: true,
            },
          },

          scheduledStartTime: true,
          task_status: true,
          updatedAt: true,

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
  @swagger.ApiOkResponse({ type: EmployeeTask })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("EmployeeTaskService", "deleteEmployeeTask")
  async deleteEmployeeTask(
    @common.Param() params: EmployeeTaskWhereUniqueInput
  ): Promise<EmployeeTask | null> {
    try {
      return await this.service.deleteEmployeeTask({
        where: params,
        select: {
          actualDuration: true,
          actualStartTime: true,

          appointments: {
            select: {
              id: true,
            },
          },

          completedAt: true,
          createdAt: true,
          estimatedDuration: true,
          id: true,
          notes: true,
          order_type: true,

          orders: {
            select: {
              id: true,
            },
          },

          queues: {
            select: {
              id: true,
            },
          },

          salons: {
            select: {
              id: true,
            },
          },

          scheduledStartTime: true,
          task_status: true,
          updatedAt: true,

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
