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
import { UserGenderService } from "../userGender.service";
import { UserGenderCreateInput } from "./UserGenderCreateInput";
import { UserGender } from "./UserGender";
import { UserGenderFindManyArgs } from "./UserGenderFindManyArgs";
import { UserGenderWhereUniqueInput } from "./UserGenderWhereUniqueInput";
import { UserGenderUpdateInput } from "./UserGenderUpdateInput";
import { UserProfileFindManyArgs } from "../../userProfile/base/UserProfileFindManyArgs";
import { UserProfile } from "../../userProfile/base/UserProfile";
import { UserProfileWhereUniqueInput } from "../../userProfile/base/UserProfileWhereUniqueInput";

export class UserGenderControllerBase {
  constructor(protected readonly service: UserGenderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserGender })
  async createUserGender(
    @common.Body() data: UserGenderCreateInput
  ): Promise<UserGender> {
    return await this.service.createUserGender({
      data: data,
      select: {
        gender: true,
        id: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserGender] })
  @ApiNestedQuery(UserGenderFindManyArgs)
  async userGenders(@common.Req() request: Request): Promise<UserGender[]> {
    const args = plainToClass(UserGenderFindManyArgs, request.query);
    return this.service.userGenders({
      ...args,
      select: {
        gender: true,
        id: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserGender })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userGender(
    @common.Param() params: UserGenderWhereUniqueInput
  ): Promise<UserGender | null> {
    const result = await this.service.userGender({
      where: params,
      select: {
        gender: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: UserGender })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserGender(
    @common.Param() params: UserGenderWhereUniqueInput,
    @common.Body() data: UserGenderUpdateInput
  ): Promise<UserGender | null> {
    try {
      return await this.service.updateUserGender({
        where: params,
        data: data,
        select: {
          gender: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: UserGender })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserGender(
    @common.Param() params: UserGenderWhereUniqueInput
  ): Promise<UserGender | null> {
    try {
      return await this.service.deleteUserGender({
        where: params,
        select: {
          gender: true,
          id: true,
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

  @common.Get("/:id/userProfiles")
  @ApiNestedQuery(UserProfileFindManyArgs)
  async findUserProfiles(
    @common.Req() request: Request,
    @common.Param() params: UserGenderWhereUniqueInput
  ): Promise<UserProfile[]> {
    const query = plainToClass(UserProfileFindManyArgs, request.query);
    const results = await this.service.findUserProfiles(params.id, {
      ...query,
      select: {
        avatarUrl: true,
        bio: true,
        createdAt: true,
        dateOfBirth: true,
        deletedAt: true,
        email: true,
        employeeDismissalAt: true,
        employeeEmploymentAt: true,
        firstName: true,
        fullName: true,
        fullRegistered: true,
        hiredDate: true,
        id: true,
        isAdmin: true,
        isBarber: true,
        isEmployee: true,
        jobTitle: true,
        lastName: true,
        location: true,
        loyaltyPoints: true,
        phone: true,
        roles: true,

        salonsUserProfilesSalonIdTosalons: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        userGenders: {
          select: {
            id: true,
          },
        },

        userNotificationSettings: {
          select: {
            id: true,
          },
        },

        username: true,
        website: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/userProfiles")
  async connectUserProfiles(
    @common.Param() params: UserGenderWhereUniqueInput,
    @common.Body() body: UserProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userProfiles: {
        connect: body,
      },
    };
    await this.service.updateUserGender({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/userProfiles")
  async updateUserProfiles(
    @common.Param() params: UserGenderWhereUniqueInput,
    @common.Body() body: UserProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userProfiles: {
        set: body,
      },
    };
    await this.service.updateUserGender({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/userProfiles")
  async disconnectUserProfiles(
    @common.Param() params: UserGenderWhereUniqueInput,
    @common.Body() body: UserProfileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userProfiles: {
        disconnect: body,
      },
    };
    await this.service.updateUserGender({
      where: params,
      data,
      select: { id: true },
    });
  }
}
