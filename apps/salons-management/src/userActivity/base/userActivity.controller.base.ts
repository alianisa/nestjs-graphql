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
import { UserActivityService } from "../userActivity.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserActivityCreateInput } from "./UserActivityCreateInput";
import { UserActivity } from "./UserActivity";
import { UserActivityFindManyArgs } from "./UserActivityFindManyArgs";
import { UserActivityWhereUniqueInput } from "./UserActivityWhereUniqueInput";
import { UserActivityUpdateInput } from "./UserActivityUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserActivityControllerBase {
  constructor(
    protected readonly service: UserActivityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserActivity })
  @nestAccessControl.UseRoles({
    resource: "UserActivity",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUserActivity(
    @common.Body() data: UserActivityCreateInput
  ): Promise<UserActivity> {
    return await this.service.createUserActivity({
      data: data,
      select: {
        activityDescription: true,
        activityName: true,
        activitySubText: true,
        activityTime: true,
        activityType: true,
        id: true,
        otherUser: true,
        projectRef: true,
        readState: true,
        targetUserRef: true,
        taskRef: true,
        unreadByUser: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserActivity] })
  @ApiNestedQuery(UserActivityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserActivity",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userActivities(
    @common.Req() request: Request
  ): Promise<UserActivity[]> {
    const args = plainToClass(UserActivityFindManyArgs, request.query);
    return this.service.userActivities({
      ...args,
      select: {
        activityDescription: true,
        activityName: true,
        activitySubText: true,
        activityTime: true,
        activityType: true,
        id: true,
        otherUser: true,
        projectRef: true,
        readState: true,
        targetUserRef: true,
        taskRef: true,
        unreadByUser: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserActivity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserActivity",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userActivity(
    @common.Param() params: UserActivityWhereUniqueInput
  ): Promise<UserActivity | null> {
    const result = await this.service.userActivity({
      where: params,
      select: {
        activityDescription: true,
        activityName: true,
        activitySubText: true,
        activityTime: true,
        activityType: true,
        id: true,
        otherUser: true,
        projectRef: true,
        readState: true,
        targetUserRef: true,
        taskRef: true,
        unreadByUser: true,
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
  @swagger.ApiOkResponse({ type: UserActivity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserActivity",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUserActivity(
    @common.Param() params: UserActivityWhereUniqueInput,
    @common.Body() data: UserActivityUpdateInput
  ): Promise<UserActivity | null> {
    try {
      return await this.service.updateUserActivity({
        where: params,
        data: data,
        select: {
          activityDescription: true,
          activityName: true,
          activitySubText: true,
          activityTime: true,
          activityType: true,
          id: true,
          otherUser: true,
          projectRef: true,
          readState: true,
          targetUserRef: true,
          taskRef: true,
          unreadByUser: true,
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
  @swagger.ApiOkResponse({ type: UserActivity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserActivity",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserActivity(
    @common.Param() params: UserActivityWhereUniqueInput
  ): Promise<UserActivity | null> {
    try {
      return await this.service.deleteUserActivity({
        where: params,
        select: {
          activityDescription: true,
          activityName: true,
          activitySubText: true,
          activityTime: true,
          activityType: true,
          id: true,
          otherUser: true,
          projectRef: true,
          readState: true,
          targetUserRef: true,
          taskRef: true,
          unreadByUser: true,
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
